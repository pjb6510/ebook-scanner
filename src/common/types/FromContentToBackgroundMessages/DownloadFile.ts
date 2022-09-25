import { FromContentToBackgroundMessageType } from '.';

export interface DownloadFileMessage {
  type: FromContentToBackgroundMessageType.DownloadFile;
  url: string;
  filename: string;
}
