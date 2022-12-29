import AppLayout from "../../components/AppLayout";
import { ConversationLayout } from "../../components/conversation/ConversationLayout";
import {
  ConversationsPage,
  Heading
} from "../../utils/styles/pages/ConversationsPage";
import { NextPageWithLayout } from "../../utils/types";

const Conversations: NextPageWithLayout = () => {
  return (
    <ConversationsPage>
      <Heading>Select a Conversation In The Left Panel</Heading>
    </ConversationsPage>
  );
};

Conversations.getLayout = (page) => {
  return <AppLayout>
     <ConversationLayout>{page}</ConversationLayout>
  </AppLayout>
};

export default Conversations;
