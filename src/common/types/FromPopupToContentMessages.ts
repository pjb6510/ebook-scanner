export interface FromPopupToContentMessageResponse {
  type: 'FromPopupToContentMessageResponse';
  [payload: string]: any;
}

export const enum FromPopupToContentsMessageType {
  log = 'log',
}

export interface LogMessage {
  type: FromPopupToContentsMessageType.log;
  log: any;
}

export type FromPopupToContentMessage = LogMessage;
