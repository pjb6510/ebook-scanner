export function getTitleFromDocument(document: Document) {
  return document.querySelector('.title')?.textContent;
}
