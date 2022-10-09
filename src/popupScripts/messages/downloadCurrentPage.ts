import { FromPopupToContentMessageType } from '../../common/types/FromPopupToContentMessages';
import { RequestDownloadPageMessageFromPopup } from '../../common/types/FromPopupToContentMessages/RequestDownloadPage';

export async function downloadCurrentPage(tabId: number): Promise<void> {
  const message: RequestDownloadPageMessageFromPopup = {
    type: FromPopupToContentMessageType.RequestDownloadPage,
  };

  return await chrome.tabs.sendMessage(tabId, message);
}
