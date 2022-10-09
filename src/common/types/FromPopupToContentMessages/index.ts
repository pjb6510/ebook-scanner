import { LogMessage } from './LogMessage';
import { RequestDownloadPageMessageFromPopup } from './RequestDownloadPage';
import { RequestInfoMessageFromPopup } from './RequestInfoMessage';

export const enum FromPopupToContentMessageType {
  Log = 'PopupToContentlog',
  RequestInfo = 'PopupToContentRequestInfo',
  RequestDownloadPage = 'PopupToContentRequestDownloadPage',
}

export type FromPopupToContentMessage =
  | LogMessage
  | RequestInfoMessageFromPopup
  | RequestDownloadPageMessageFromPopup;
