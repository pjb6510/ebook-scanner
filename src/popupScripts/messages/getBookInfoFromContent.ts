import { FromPopupToContentsMessageType } from '../../common/types/FromPopupToContentMessages';
import {
  RequestInfoMessage,
  RequestInfoResponse,
} from '../../common/types/FromPopupToContentMessages/RequestInfoMessage';

export function getBookInfoFromContent(
  tabId: number
): Promise<RequestInfoResponse> {
  const message: RequestInfoMessage = {
    type: FromPopupToContentsMessageType.RequestInfo,
  };

  return new Promise((resolve) => {
    chrome.tabs.sendMessage(tabId, message, (info: RequestInfoResponse) => {
      resolve(info);
    });
  });
}
