import { FromPopupToContentMessageType } from '.';

export interface LogMessage {
  type: FromPopupToContentMessageType.Log;
  log: any;
}
