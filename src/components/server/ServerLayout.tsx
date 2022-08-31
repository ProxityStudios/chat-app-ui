import * as React from "react";
import {
  ServerLayoutStyle,
  ServerMain,
} from "../../utils/styles/server/server-layout";
import ServerHeader from "./ServerHeader";
import ServerServersBar from "./ServerServersBar";
import ServerSideBar from "./ServerSideBar";

export interface ServerLayoutProps {
  children: React.ReactNode;
}

export function ServerLayout({ children }: ServerLayoutProps) {
  return (
    <ServerLayoutStyle>
      <ServerSideBar />
      <ServerMain>
        <ServerHeader />
        {children}
      </ServerMain>
      <ServerServersBar />
    </ServerLayoutStyle>
  );
}

export default ServerLayout;
