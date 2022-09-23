import { FromPopupToContentsMessageType } from '../../common/types/FromPopupToContentMessages';
import {
  RequestInfoMessage,
  RequestInfoResponse,
} from '../../common/types/FromPopupToContentMessages/RequestInfoMessage';

export function getBookInfoFromContent(
  tabId: number
): Promise<RequestInfoResponse> {
  return new Promise((resolve) => {
    chrome.tabs.sendMessage(
      tabId,
      {
        type: FromPopupToContentsMessageType.RequestInfo,
      } as RequestInfoMessage,
      (info: RequestInfoResponse) => {
        resolve(info);
      }
    );
  });
}
