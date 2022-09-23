import { FromPopupToContentsMessageType } from '.';

export interface LogMessage {
  type: FromPopupToContentsMessageType.Log;
  log: any;
}
