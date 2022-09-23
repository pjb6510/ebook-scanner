import { LogMessage } from "./LogMessage";
import { RequestInfoMessage } from "./RequestInfoMessage";

export const enum FromPopupToContentsMessageType {
  Log = 'log',
  RequestInfo = 'RequestInfo',
}

export type FromPopupToContentMessage = LogMessage | RequestInfoMessage;
