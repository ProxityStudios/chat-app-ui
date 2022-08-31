import type { AppProps } from "next/app";
import { globalStyles } from "../../stitches.config";
import { AuthProvider } from "../contexts/AuthContext";
import { NextPageWithLayout } from "../utils/types";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function ChatApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles();
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default ChatApp;
