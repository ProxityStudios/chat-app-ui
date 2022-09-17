import { NextPage } from "next";
import * as React from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface User {
  id: string;
  displayName: string;
  email: string;
  password: string;
  avatarUrl: string;
  biography?: string;
}

type SafeUser = Omit<User, "password">;

export interface ConversationCreator extends SafeUser {}

export interface Conversation {
  id: string;
  creator: ConversationCreator;
  messages: ConversationMessage[];
  createdAt: Date;
  lastMessageSentAt: Date | null;
  isStared: boolean;
  isUnreaded: boolean;
  isTyping: boolean;
  unreadedMessagesCount: number;
}

export interface ConversationMessageAuthor extends SafeUser {}

export interface ConversationMessage {
  id: string;
  author: ConversationMessageAuthor;
  content: string;
  createdAt: Date;
}
