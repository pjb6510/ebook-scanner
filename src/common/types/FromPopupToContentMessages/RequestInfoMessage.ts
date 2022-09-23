import { FromPopupToContentsMessageType } from '.';

export interface RequestInfoMessage {
  type: FromPopupToContentsMessageType.RequestInfo;
}

export type RequestInfoResponse = {
  currentPage: string;
  pageNumber: string;
} | null;
