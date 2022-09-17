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
      displayName: "Ticho Lawy",
      email: "ticho@proxitystudios.tk",
      biography: "Lorem ipsum dolar sit amet consetcetur",
      avatarUrl: "https://github.com/Tichooo.png",
    },
    messages: [
      {
        id: "001",
        createdAt: new Date(),
        content: "Hello",
        author: {
          id: "01",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/Tichooo.png",
        },
      },
      {
        id: "002",
        createdAt: __lastMessageSentAt__,
        content: "Hello there??? Can you respond me???????",
        author: {
          id: "01",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/Tichooo.png",
        },
      },
    ],
    createdAt: new Date(),
    lastMessageSentAt: __lastMessageSentAt__,
  },
  {
    id: "2",
    isStared: false,
    isUnreaded: false,
    isTyping: true,
    unreadedMessagesCount: 0,
    creator: {
      id: "02",
      displayName: "Crawl Prothe",
      email: "crawl@proxitystudios.tk",
      biography: "Lorem ipsum dolar sit amet consetcetur",
      avatarUrl: "https://github.com/CrawlTheDev2.png",
    },
    messages: [
      {
        id: "003",
        createdAt: new Date(),
        content: "Hello",
        author: {
          id: "02",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/CrawlTheDev2.png",
        },
      },
      {
        id: "004",
        createdAt: __lastMessageSentAt__,
        content: "Hello there???",
        author: {
          id: "02",
          email: "ticho@proxitystudios.tk",
          displayName: "Tichooo Is Enginner",
          biography: "Lorem ipsum dolar sit amet consetcetur",
          avatarUrl: "https://github.com/CrawlTheDev2.png",
        },
      },
    ],
    createdAt: new Date(),
    lastMessageSentAt: __lastMessageSentAt__,
  },
];
