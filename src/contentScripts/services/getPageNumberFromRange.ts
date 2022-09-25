export function getPageNumberFromRange($pageRange: Element | null) {
  const currentPageNumber = $pageRange?.children[1].textContent?.trim() ?? null;
  const totalPageNumber =
    $pageRange?.children[2].textContent?.replace('/', '').trim() ?? null;

  return {
    currentPageNumber,
    totalPageNumber,
  };
}
