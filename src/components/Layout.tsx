import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return <>{props.children}</>;
}

export default Layout;
