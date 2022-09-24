export function getCurrentRendererPageElem(document: Document) {
  return Array.from(document.querySelectorAll('reader-page')).find(
    (renderPage) => renderPage.classList.contains('shown')
  );
}
