import { useEffect, useState } from 'react';
import { RequestInfoResponse } from '../../common/types/FromPopupToContentMessages/RequestInfoMessage';
import { getBookInfoFromContent } from '../messages/getBookInfoFromContent';
import { getTabs } from '../utils/getTabs';

const GOOGLE_BOOKS_URL = 'play.google.com/books/reader';

export function useBookInfo() {
  const [id, setId] = useState<string | null>(null);
  const [urlPageInfo, setUrlPageInfo] = useState<string | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState<string | null>(
    null
  );
  const [totalPageNumber, setTotalPageNumber] = useState<string | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      return;
    }

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
      setUrlPageInfo(page);
    };

    const updateInfoFromContent = (info: RequestInfoResponse) => {
      setTotalPageNumber(info?.totalPageNumber ?? null);
      setCurrentPageNumber(info?.currentPageNumber ?? null);
    };

    const initInfo = async () => {
      const tabs = await getTabs();
      if (tabs[0].url != null) {
        updateInfoFromURL(tabs[0].url);
      }

      if (tabs[0].id != null) {
        const bookInfo = await getBookInfoFromContent(tabs[0].id);
        updateInfoFromContent(bookInfo);
      }
    };

    const handleTabsUpdated = async (
      _tabId: number,
      changeInfo: chrome.tabs.TabChangeInfo,
      tab: chrome.tabs.Tab
    ) => {
      if (changeInfo.status !== 'complete') {
        return;
      }

      if (tab.url != null) {
        updateInfoFromURL(tab.url);
      }

      if (tab.id != null) {
        const bookInfo = await getBookInfoFromContent(tab.id);
        updateInfoFromContent(bookInfo);
      }
    };

    initInfo();

    chrome.tabs.onUpdated.addListener(handleTabsUpdated);

    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabsUpdated);
    };
  }, []);

  return { id, currentPageNumber, totalPageNumber, urlPageInfo };
}
