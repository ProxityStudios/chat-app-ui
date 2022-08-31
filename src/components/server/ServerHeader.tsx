import { ServerHeaderStyle } from "../../utils/styles/server/server-header";

export interface ServerHeaderProps {}

export function ServerHeader(props: ServerHeaderProps) {
  return (
    <ServerHeaderStyle>
      <h4>Server</h4>
    </ServerHeaderStyle>
  );
}

export default ServerHeader;
