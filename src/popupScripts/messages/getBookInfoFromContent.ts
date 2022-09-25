import { FromPopupToContentsMessageType } from '../../common/types/FromPopupToContentMessages';
import {
  RequestInfoMessage,
  RequestInfoResponse,
} from '../../common/types/FromPopupToContentMessages/RequestInfoMessage';

export async function getBookInfoFromContent(
  tabId: number
): Promise<RequestInfoResponse> {
  const message: RequestInfoMessage = {
    type: FromPopupToContentsMessageType.RequestInfo,
  };

  return await chrome.tabs.sendMessage(tabId, message);
}
