import { NextPage } from "next";
import * as React from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}
