import { RequestDownloadPageMessage } from '../common/types/FromPopupToContentMessages/RequestDownloadPage';
import { createDownloadBlobTrigger } from './services/createDownloadBlobTrigger';
import { getCurrentRendererPageElem } from './services/getCurrentRendererPageElem';
import { getImageUrlFromRenderPage } from './services/getImageUrlFromRenderPage';
import { getPageNumberFromRange } from './services/getPageNumberFromRange';
import { getPageRangeElem } from './services/getPageRangeElem';

export function handleDownloadPageMessage(
  _message: RequestDownloadPageMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: () => void
) {
  const $currentRenderPage = getCurrentRendererPageElem(document);
  if ($currentRenderPage == null) {
    return;
  }

  const imageUrl = getImageUrlFromRenderPage($currentRenderPage);
  if (imageUrl == null) {
    return;
  }

  const pageNumber = (() => {
    const $pageElem = getPageRangeElem(document);
    if ($pageElem == null) {
      return null;
    }

    const { currentPageNumber } = getPageNumberFromRange($pageElem);
    return currentPageNumber ?? null;
  })();

  const downloadPageImage = createDownloadBlobTrigger(
    document,
    imageUrl,
    `page-${pageNumber ?? 'unknown'}.png`
  );

  downloadPageImage();
  sendResponse();
}
