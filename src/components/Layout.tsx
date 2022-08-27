import * as React from "react";
import {
  ContentWithNavbar,
  LayoutContentWrapper,
  LayoutView,
} from "../utils/styles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarWithoutChannels from "./SidebarWithoutChannels";

export interface LayoutProps {
  children: React.ReactNode;
  shouldUserSeeServerChannelsSidebar?: boolean;
}

export function Layout({
  shouldUserSeeServerChannelsSidebar = true,
  children,
}: LayoutProps) {
  return (
    <LayoutView>
      {shouldUserSeeServerChannelsSidebar ? (
        <Sidebar />
      ) : (
        <SidebarWithoutChannels />
      )}

      <ContentWithNavbar>
        <Navbar />
        <LayoutContentWrapper>{children}</LayoutContentWrapper>
      </ContentWithNavbar>
    </LayoutView>
  );
}

export default Layout;
