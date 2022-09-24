export function getImageUrlFromRenderPage($renderPage: Element) {
  return $renderPage.getElementsByTagName('img')[0].getAttribute('src');
}
