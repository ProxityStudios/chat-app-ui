import type { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "../../stitches.config";
import { AuthProvider } from "../contexts/AuthContext";
import { ConversationProvider } from "../contexts/ConversationContext";
import { NextPageWithLayout } from "../utils/types";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function ChatApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      <ConversationProvider>
        <Head>
          <title>Chat Application</title>
        </Head>

        {getLayout(<Component {...pageProps} />)}
      </ConversationProvider>
    </AuthProvider>
  );
}

export default ChatApp;
