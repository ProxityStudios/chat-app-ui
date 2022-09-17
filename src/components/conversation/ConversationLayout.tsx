import { useRouter } from "next/router";
import * as React from "react";
import { __conversations__ } from "../../../__mocks__/conversations";
import { useAuth } from "../../contexts/AuthContext";
import { useConversation } from "../../contexts/ConversationContext";
import {
  ConversationLayoutStyle,
  ConversationView,
} from "../../utils/styles/conversation/ConversationLayout";
import NavigationBar from "../NavigationBar";
import ConversationHeader from "./ConversationHeader";
import ConversationsBar from "./ConversationsBar";

export interface ConversationLayoutProps {
  children: React.ReactNode;
}

export function ConversationLayout({ children }: ConversationLayoutProps) {
  const { selectConversation } = useConversation();
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) return;
    if (!user) {
      router.push("/auth/sign-in", undefined, { shallow: true });
      return;
    }

    // fetch stuff
    const conversations = __conversations__;
    const conversationId = router.query.conversationId;

    if (
      conversationId &&
      typeof conversationId === "string" &&
      conversations.find((c) => c.id === conversationId)
    ) {
      console.log("Conversation exists, dispatching");
      selectConversation(conversationId);
    } else {
      console.log("Conversation not exists, redirecting");
      router.push("/conversations", undefined, { shallow: true });
    }
    // }, [router.isReady]);
  }, [router.asPath, router.isReady]);

  return (
    <ConversationLayoutStyle>
      <ConversationHeader />

      <ConversationView>
        <NavigationBar />
        <ConversationsBar />
        {children}
      </ConversationView>
    </ConversationLayoutStyle>
  );
}

export default ConversationLayout;
