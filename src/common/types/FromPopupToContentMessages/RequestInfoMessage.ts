import { FromPopupToContentsMessageType } from '.';

export interface RequestInfoMessage {
  type: FromPopupToContentsMessageType.RequestInfo;
}

export type RequestInfoResponse = {
  currentPageNumber: string;
  totalPageNumber: string;
} | null;
