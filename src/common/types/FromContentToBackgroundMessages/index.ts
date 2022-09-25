import { DownloadFileMessage } from './DownloadFile';

export const enum FromContentToBackgroundMessageType {
  DownloadFile = 'DownloadFile',
}

export type FromContentToBackgroundMessage = DownloadFileMessage;
