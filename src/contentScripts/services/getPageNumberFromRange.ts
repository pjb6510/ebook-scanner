export function getPageNumberFromRange($pageRange: Element) {
  const currentPageNumber = $pageRange?.children[1].textContent?.trim();
  const totalPageNumber = $pageRange?.children[2].textContent
    ?.replace('/', '')
    .trim();

  return {
    currentPageNumber,
    totalPageNumber,
  };
}
