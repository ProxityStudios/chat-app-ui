import { useRouter } from "next/router";
import ConversationLayout from "../../../components/conversation/Layout";
import { NextPageWithLayout } from "../../../utils/types";

const Conversation: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div>
      Conversation {router.query.conversationId}
      {/* <div style={{ height: 1200 }}>Huge content</div> */}
    </div>
  );
};

Conversation.getLayout = (page) => {
  return <ConversationLayout>{page}</ConversationLayout>;
};

export default Conversation;
