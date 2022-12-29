import { useRouter } from "next/router";
import * as React from "react";
import { __conversations__ } from "../../../__mocks__/conversations";
import { useConversation } from "../../contexts/ConversationContext";
import {
  ConversationLayoutContainerStyle, ConversationLayoutContentStyle
} from "../../utils/styles/conversation/ConversationLayout";
import Conversations from "./Conversations";

export interface ConversationLayoutProps {
  children: React.ReactNode;
}

export function ConversationLayout({ children }: ConversationLayoutProps) {
  const { selectConversation } = useConversation();
  const router = useRouter();

  React.useEffect(() => {
     if (!router.isReady) return;

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
  }, [router.isReady]);

  return (
    <ConversationLayoutContainerStyle>
      <Conversations />
      <ConversationLayoutContentStyle>{children}</ConversationLayoutContentStyle>
    </ConversationLayoutContainerStyle>
  );
}


