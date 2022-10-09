import { RequestInfoMessageFromBg } from '../common/types/FromBackgroundtoContentMessages/RequestInfoMessage';
import {
  RequestInfoMessageFromPopup,
} from '../common/types/FromPopupToContentMessages/RequestInfoMessage';
import { RequestInfoResponse } from "../common/types/common/RequestInfoResponse";
import { getPageNumberFromRange } from './services/getPageNumberFromRange';
import { getPageRangeElem } from './services/getPageRangeElem';

export function handleInfoRequest(
  _message: RequestInfoMessageFromPopup | RequestInfoMessageFromBg,
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
