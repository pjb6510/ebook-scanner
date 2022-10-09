import { RequestDownloadPageMessageFromBg } from '../common/types/FromBackgroundtoContentMessages/RequestDownloadPage';
import { RequestDownloadPageMessageFromPopup } from '../common/types/FromPopupToContentMessages/RequestDownloadPage';
import { createDownloadBlobTrigger } from './services/createDownloadBlobTrigger';
import { getCurrentRendererPageElem } from './services/getCurrentRendererPageElem';
import { getImageUrlFromRenderPage } from './services/getImageUrlFromRenderPage';
import { getPageNumberFromRange } from './services/getPageNumberFromRange';
import { getPageRangeElem } from './services/getPageRangeElem';
import { getTitleFromDocument } from './services/getTitleFromDocument';
import { isBookReaderFrame } from './utils/frames';

export async function handleRequestDownloadPageMessage(
  _message:
    | RequestDownloadPageMessageFromPopup
    | RequestDownloadPageMessageFromBg,
  _sender: chrome.runtime.MessageSender,
  _sendResponse: () => void
) {
  if (!isBookReaderFrame(window.location.href)) {
    return;
  }

  const $currentRenderPage = getCurrentRendererPageElem(document);
  if ($currentRenderPage == null) {
    return;
  }

  const imageUrl = getImageUrlFromRenderPage($currentRenderPage);
  if (imageUrl == null) {
    return;
  }

  const { currentPageNumber } = getPageNumberFromRange(
    getPageRangeElem(document)
  );
  const title = getTitleFromDocument(document);

  const downloadPage = createDownloadBlobTrigger(
    imageUrl,
    `${title}/page-${currentPageNumber ?? 'unknown'}.png`
  );

  await downloadPage();
}
