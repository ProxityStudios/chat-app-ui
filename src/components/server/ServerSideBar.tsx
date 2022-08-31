import { ServerSideBarStyle } from "../../utils/styles/server/server-side-bar";

export interface ServerSideBarProps {}

export function ServerSideBar(props: ServerSideBarProps) {
  return (
    <ServerSideBarStyle>
      <h2>ServerViewSidebar</h2>
    </ServerSideBarStyle>
  );
}

export default ServerSideBar;
