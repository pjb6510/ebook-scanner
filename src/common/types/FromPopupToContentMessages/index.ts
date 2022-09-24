import { LogMessage } from './LogMessage';
import { RequestDownloadPageMessage } from './RequestDownloadPage';
import { RequestInfoMessage } from './RequestInfoMessage';

export const enum FromPopupToContentsMessageType {
  Log = 'log',
  RequestInfo = 'RequestInfo',
  RequestDownloadPage = 'RequestDownloadPage',
}

export type FromPopupToContentMessage =
  | LogMessage
  | RequestInfoMessage
  | RequestDownloadPageMessage;
