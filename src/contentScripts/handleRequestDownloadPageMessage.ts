import { RequestDownloadPageMessage } from '../common/types/FromPopupToContentMessages/RequestDownloadPage';

export function handleDownloadPageMessage(
  message: RequestDownloadPageMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: () => void
) {
  const $currentPage = Array.from(
    document.querySelectorAll('reader-page')
  ).find((renderPage) => renderPage.classList.contains('shown'));

  if ($currentPage == null) {
    return;
  }

  const imageUrl = $currentPage
    .getElementsByTagName('img')[0]
    .getAttribute('src');

  if (imageUrl == null) {
    return;
  }

  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `${message.fileName}.png`;
  document.body.appendChild(link); // Or append it whereever you want
  link.click();
  link.remove();

  sendResponse();
}
