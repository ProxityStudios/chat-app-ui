import * as React from "react";
import { __conversations__ } from "../../../__mocks__/conversations";
import {
  ConversationLayoutContainerStyle, ConversationLayoutContentStyle
} from "../../utils/styles/components/conversation/ConversationLayout";
import Conversations from "./Conversations";

export interface ConversationLayoutProps {
  children: React.ReactNode;
}

export function ConversationLayout({ children }: ConversationLayoutProps) {
  return (
    <ConversationLayoutContainerStyle>
      <Conversations />
      <ConversationLayoutContentStyle>{children}</ConversationLayoutContentStyle>
    </ConversationLayoutContainerStyle>
  );
}


