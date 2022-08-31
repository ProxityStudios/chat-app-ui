import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { servers } from "../../../__mocks__";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../../utils/styles";
import {
  FindNameForThis,
  Server,
  ServerServersBarContainer,
  ServerServersBarStyle,
} from "../../utils/styles/server/server-servers-bar";

export interface ServerServersBarProps {}

export function ServerServersBar(props: ServerServersBarProps) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const onClick = () => {
    logout();
    router.push("/auth/sign-in");
  };

  return (
    <ServerServersBarStyle>
      <FindNameForThis />

      <h4>{user?.username}</h4>
      <ServerServersBarContainer>
        {servers.map((server) => (
          <Link key={server.id} href={"/servers/" + server.id} passHref>
            <Server selected={server.selected}>
              <Image
                src={server.image}
                alt={server.name}
                layout="fill"
                placeholder="blur"
                blurDataURL={server.image}
                loading="lazy"
              />
            </Server>
          </Link>
        ))}
      </ServerServersBarContainer>
      <Button size="small" onClick={onClick}>
        Sign out
      </Button>
    </ServerServersBarStyle>
  );
}

export default ServerServersBar;
