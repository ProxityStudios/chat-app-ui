import AppLayout from "../../../components/AppLayout";
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
  return <AppLayout>
     <ConversationLayout>{page}</ConversationLayout>
  </AppLayout>
};

export default Conversation;
