import { DownloadAllPagesMessage } from './DownloadAllPages';

export const enum FromPopupToBackgroundMessageType {
  DownloadAllPages = 'PopupToBgDownloadAllPages',
}

export type FromPopupToBackgroundMessage = DownloadAllPagesMessage;
