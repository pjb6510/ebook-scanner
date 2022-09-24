import {
  RequestInfoMessage,
  RequestInfoResponse,
} from '../common/types/FromPopupToContentMessages/RequestInfoMessage';
import { getPageNumberFromRange } from './services/getPageNumberFromRange';
import { getPageRangeElem } from './services/getPageRangeElem';

export function handleRequestInfoMessageMessage(
  _message: RequestInfoMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: RequestInfoResponse) => void
) {
  const $range = getPageRangeElem(document);

  if ($range == null) {
    return;
  }

  const { currentPageNumber, totalPageNumber } = getPageNumberFromRange($range);

  if (totalPageNumber == null || currentPageNumber == null) {
    return;
  }

  sendResponse({ totalPageNumber, currentPageNumber });
}
