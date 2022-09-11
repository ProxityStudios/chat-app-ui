import * as React from "react";
import { Conversation } from "../../utils/styles/conversation/Conversation";
import {
  ConversationContent,
  ConversationLayoutStyle,
} from "../../utils/styles/conversation/ConversationLayout";
import ConversationHeader from "./Header";
import ConversationMessagesInfoBar from "./MessagesInfoBar";
import ConversationNavigationBar from "./NavigationBar";
import ConversationRightBar from "./RightBar";

export interface ConversationLayoutProps {
  children: React.ReactNode;
}

export function ConversationLayout({ children }: ConversationLayoutProps) {
  return (
    <ConversationLayoutStyle>
      <ConversationHeader />

      <ConversationContent>
        <ConversationNavigationBar />
        <ConversationMessagesInfoBar />

        <Conversation>{children}</Conversation>

        <ConversationRightBar />
      </ConversationContent>
    </ConversationLayoutStyle>
  );
}

export default ConversationLayout;
