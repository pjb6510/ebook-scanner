export function getNewPageLink(currentUrl: string, targetPageNumber: number) {
  return currentUrl.replace(/pg=([^&]*)/, `pg=GBS.PA${targetPageNumber}`);
}
