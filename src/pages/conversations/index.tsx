import ConversationLayout from "../../components/conversation/ConversationLayout";
import { NextPageWithLayout } from "../../utils/types";

const Conversations: NextPageWithLayout = () => {
  return <div>Select a conversation in the left panel</div>;
};

Conversations.getLayout = (page) => {
  return <ConversationLayout>{page}</ConversationLayout>;
};

export default Conversations;
