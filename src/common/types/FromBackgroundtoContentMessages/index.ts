import { RequestDownloadPageMessageFromBg } from './RequestDownloadPage';
import { RequestInfoMessageFromBg } from './RequestInfoMessage';

export const enum FromBackgroundToContentMessageType {
  RequestInfo = 'BgToContentRequestInfo',
  RequestDownloadPage = 'BgToContentRequestDownloadPage',
}

export type FromBackgroundToContentMessage =
  | RequestInfoMessageFromBg
  | RequestDownloadPageMessageFromBg;
