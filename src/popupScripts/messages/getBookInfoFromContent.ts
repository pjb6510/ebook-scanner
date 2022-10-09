import { FromPopupToContentMessageType } from '../../common/types/FromPopupToContentMessages';
import {
  RequestInfoMessageFromPopup,
} from '../../common/types/FromPopupToContentMessages/RequestInfoMessage';
import { RequestInfoResponse } from "../../common/types/common/RequestInfoResponse";

export async function getBookInfoFromContent(
  tabId: number
): Promise<RequestInfoResponse> {
  const message: RequestInfoMessageFromPopup = {
    type: FromPopupToContentMessageType.RequestInfo,
  };

  return await chrome.tabs.sendMessage(tabId, message);
}
