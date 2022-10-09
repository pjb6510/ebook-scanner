import { RequestInfoResponse } from '../common/types/common/RequestInfoResponse';
import { FromBackgroundToContentMessageType } from '../common/types/FromBackgroundtoContentMessages';
import { RequestDownloadPageMessageFromBg } from '../common/types/FromBackgroundtoContentMessages/RequestDownloadPage';
import { RequestInfoMessageFromBg } from '../common/types/FromBackgroundtoContentMessages/RequestInfoMessage';
import { FromPopupToBackgroundMessage } from '../common/types/FromPopupToBackgroundMessages';
import { range } from '../common/utils/fx';
import { getTabs } from '../common/utils/getTabs';
import { getNewPageLink } from './utils/getNewPageLink';

function waitForUpdate(): Promise<void> {
  return new Promise((resolve) => {
    let hasBeenFirstUpdateCompleteOccured = false;

    const handleTabUpdated = async (
      _tabId: number,
      changeInfo: chrome.tabs.TabChangeInfo
    ) => {
      if (changeInfo.status === 'complete') {
        if (hasBeenFirstUpdateCompleteOccured) {
          hasBeenFirstUpdateCompleteOccured = false;
          chrome.tabs.onUpdated.removeListener(handleTabUpdated);
          resolve();
        } else {
          hasBeenFirstUpdateCompleteOccured = true;
        }
      }
    };

    chrome.tabs.onUpdated.addListener(handleTabUpdated);
  });
}

export async function handleDownloadAllPages(
  _message: FromPopupToBackgroundMessage,
  _sender: chrome.runtime.MessageSender,
  _sendResponse: () => void
) {
  const tabs = await getTabs();
  const currentTab = tabs[0];

  if (currentTab.id == null || currentTab.url == null) {
    return;
  }

  const requestInfoMessage: RequestInfoMessageFromBg = {
    type: FromBackgroundToContentMessageType.RequestInfo,
  };

  const bookInfo = (await chrome.tabs.sendMessage(
    currentTab.id,
    requestInfoMessage
  )) as RequestInfoResponse;

  if (bookInfo == null) {
    return;
  }

  const requestDownloadPageMessage: RequestDownloadPageMessageFromBg = {
    type: FromBackgroundToContentMessageType.RequestDownloadPage,
  };

  const pageNumbers = range(1, Number(bookInfo.totalPageNumber));
  const newPageLinks = pageNumbers.map((pageNumber) =>
    getNewPageLink(currentTab.url as string, pageNumber)
  );

  for (const pageLink of newPageLinks) {
    await chrome.tabs.update({ url: pageLink });
    await waitForUpdate();
    await chrome.tabs.sendMessage(currentTab.id, requestDownloadPageMessage);
  }
}
