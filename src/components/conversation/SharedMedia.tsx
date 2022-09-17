import { ConversationSharedMediaBarStyle } from "../../utils/styles/conversation/ConversationSharedMediaBar";

export interface ConversationSharedMediaProps {}

export function ConversationSharedMediaBar(
  props: ConversationSharedMediaProps
) {
  return (
    <ConversationSharedMediaBarStyle>
      Shared media
    </ConversationSharedMediaBarStyle>
  );
}

export default ConversationSharedMediaBar;
