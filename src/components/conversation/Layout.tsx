import * as React from "react";
import { Conversation } from "../../utils/styles/conversation/Conversation";
import {
  ConversationContent,
  ConversationLayoutStyle,
} from "../../utils/styles/conversation/ConversationLayout";
import ConversationHeader from "./Header";
import ConversationMessagesBar from "./MessagesBar";
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
        <ConversationMessagesBar />

        <Conversation>{children}</Conversation>

        <ConversationRightBar />
      </ConversationContent>
    </ConversationLayoutStyle>
  );
}

export default ConversationLayout;
