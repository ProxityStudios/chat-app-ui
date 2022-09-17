import { Conversation } from "../src/utils/types";

const __lastMessageSentAt__ = new Date();

export const __conversations__: Conversation[] = [
  {
    id: "1",
    isStared: true,
    isUnreaded: true,
    isTyping: false,
    unreadedMessagesCount: 15,
    creator: {
      id: "01",
      displayName: "Tichooo Is Enginner",
      email: "ticho@proxitystudios.tk",
      biography: "Lorem ipsum dolar sit amet consetcetur",
      avatarUrl: "https://github.com/profile.png",
    },
    messages: [
      {
        id: "001",
        createdAt: new Date(),
        content: "Hello",
        author: {
          id: "001",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/profile.png",
        },
      },
      {
        id: "002",
        createdAt: __lastMessageSentAt__,
        content: "Hello there???",
        author: {
          id: "001",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/profile.png",
        },
      },
    ],
    createdAt: new Date(),
    lastMessageSentAt: __lastMessageSentAt__,
  },
];
