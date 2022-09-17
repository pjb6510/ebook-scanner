import { useEffect, useState } from 'react';

const GOOGLE_BOOKS_URL = 'play.google.com/books/reader';

export function useBookInfo() {
  const [id, setId] = useState<string | null>(null);
  const [page, setPage] = useState<string | null>(null);

  useEffect(() => {
    const updateInfoFromURL = (url: string) => {
      if (!url.includes(GOOGLE_BOOKS_URL)) {
        return;
      }

      const queryString = url?.split('?')?.[1];

      if (queryString == null) {
        return;
      }

      const searchParams = new URLSearchParams(queryString);
      const id = searchParams.get('id');
      const page = searchParams.get('pg');

      if (id == null) {
        return;
      }

      setId(id);
      setPage(page);
    };

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      if (tabs[0].url == null) {
        return;
      }

      updateInfoFromURL(tabs[0].url);
    });

    const handleTabsUpdated = (
      _tabId: number,
      changeInfo: chrome.tabs.TabChangeInfo,
      tab: chrome.tabs.Tab
    ) => {
      if (changeInfo.status !== 'complete') {
        return;
      }

      if (tab.url == null) {
        return;
      }

      updateInfoFromURL(tab.url);
    };

    chrome.tabs.onUpdated.addListener(handleTabsUpdated);

    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabsUpdated);
    };
  }, []);

  return { id, page };
}
