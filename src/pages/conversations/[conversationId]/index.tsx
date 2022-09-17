import ConversationLayout from "../../../components/conversation/ConversationLayout";
import ConversationMessages from "../../../components/conversation/ConversationMessages";
import ConversationSharedMediaBar from "../../../components/conversation/ConversationSharedMedia";
import { NextPageWithLayout } from "../../../utils/types";

const Conversation: NextPageWithLayout = () => {
  return (
    <>
      <ConversationMessages />

      <ConversationSharedMediaBar />
    </>
  );
};

Conversation.getLayout = (page) => {
  return <ConversationLayout>{page}</ConversationLayout>;
};

export default Conversation;
