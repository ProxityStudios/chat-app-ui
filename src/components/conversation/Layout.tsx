import * as React from "react";
import { Conversation } from "../../utils/styles/conversation/Conversation";
import {
  ConversationLayoutStyle,
  ConversationView,
} from "../../utils/styles/conversation/ConversationLayout";
import ConversationHeader from "./Header";
import ConversationMessages from "./Messages";
import ConversationMessagesInfoBar from "./MessagesInfoBar";
import ConversationNavigationBar from "./NavigationBar";
import ConversationSharedMediaBar from "./SharedMedia";

export interface ConversationLayoutProps {
  children: React.ReactNode;
}

export function ConversationLayout({ children }: ConversationLayoutProps) {
  return (
    <ConversationLayoutStyle>
      <ConversationHeader />

      <ConversationView>
        <ConversationNavigationBar />
        <ConversationMessagesInfoBar />

        <Conversation>
          <ConversationMessages />
        </Conversation>

        <ConversationSharedMediaBar />
      </ConversationView>
    </ConversationLayoutStyle>
  );
}

export default ConversationLayout;
