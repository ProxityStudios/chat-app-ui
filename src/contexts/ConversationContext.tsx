import * as React from "react";
import { __conversations__ } from "../../__mocks__/conversations";
import { Conversation } from "../utils/types";

interface ConversationContextType {
  conversation: Conversation | null;
  selectConversation: (id: string) => void;
  unSelectConversation: () => void;
}

export const ConversationContext = React.createContext<ConversationContextType>(
  {
    conversation: null,
    selectConversation: () => null,
    unSelectConversation: () => null,
  }
);

export interface ConversationProviderProps {
  children: React.ReactNode;
}

export function ConversationProvider(props: ConversationProviderProps) {
  const [conversation, setConversation] = React.useState<Conversation | null>(
    null
  );

  function selectConversation(id: string) {
    const _conversation = __conversations__.find((c) => c.id === id);
    if (_conversation) {
      setConversation(_conversation);
    }
  }

  function unSelectConversation() {
    setConversation(null);
  }

  const value = { conversation, selectConversation, unSelectConversation };

  return (
    <ConversationContext.Provider value={value}>
      {props.children}
    </ConversationContext.Provider>
  );
}

export const useConversation = () => React.useContext(ConversationContext);
