import { useRouter } from "next/router";
import * as React from "react";
import { __conversations__ } from "../../../__mocks__/conversations";
import { useAuth } from "../../contexts/AuthContext";
import { useConversation } from "../../contexts/ConversationContext";
import {
  ConversationLayoutStyle,
  ConversationView,
} from "../../utils/styles/conversation/ConversationLayout";
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import ConversationsBar from "./ConversationsBar";
import ConversationSharedMediaBar from "./ConversationSharedMedia";

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
      console.log("Auth failed, redirecting");
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
  }, [user, router.asPath, router.isReady]);

  return (
    <ConversationLayoutStyle>
      <Header />

      <ConversationView>
        <NavigationBar />
        <ConversationsBar />
        <div style={{ width: "100%" }}>{children}</div>
        <ConversationSharedMediaBar />
      </ConversationView>
    </ConversationLayoutStyle>
  );
}

export default ConversationLayout;
