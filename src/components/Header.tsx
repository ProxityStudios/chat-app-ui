import { useAuth } from "../contexts/AuthContext";
import { Button, InputContainer, InputField } from "../utils/styles";
import { HeaderStyle, Logo } from "../utils/styles/Header";

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { logout } = useAuth();

  return (
    <HeaderStyle>
      <Logo>Chat App</Logo>

      <InputContainer
        css={{
          flex: 1,
        }}
      >
        <InputField
          css={{ marginLeft: 40, tabIndex: 0, width: 280 }}
          placeholder="Search for activities, events, people"
        />
      </InputContainer>

      <Button onClick={() => logout()}>Sign out</Button>
    </HeaderStyle>
  );
}

export default Header;
