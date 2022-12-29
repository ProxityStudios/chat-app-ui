import ConversationContent from "../../../components/conversation/ConversationContent";
import { ConversationLayout } from "../../../components/conversation/ConversationLayout";
import { NextPageWithLayout } from "../../../utils/types";

const Conversation: NextPageWithLayout = () => {
  return (
    <>
      <ConversationContent />
    </>
  );
};

Conversation.getLayout = (page) => {
  return <ConversationLayout>{page}</ConversationLayout>;
};

export default Conversation;
