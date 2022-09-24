export function createDownloadBlobTrigger(
  document: Document,
  href: string,
  fileName: string
) {
  return () => {
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
}
