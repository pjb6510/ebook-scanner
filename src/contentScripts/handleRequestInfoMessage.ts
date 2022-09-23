import {
  RequestInfoMessage,
  RequestInfoResponse,
} from '../common/types/FromPopupToContentMessages/RequestInfoMessage';

export function handleRequestInfoMessageMessage(
  _message: RequestInfoMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: RequestInfoResponse) => void
) {
  const $range = document.querySelector('reader-scrubber .page-nums');

  const currentPage = $range?.children[1].textContent?.trim();
  const pageNumber = $range?.children[2].textContent?.replace('/', '').trim();

  if (pageNumber == null || currentPage == null) {
    return;
  }

  sendResponse({ pageNumber, currentPage });
}
