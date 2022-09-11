import { Button, InputContainer, InputField } from "../../utils/styles";
import {
  ConversationHeaderStyle,
  Logo,
} from "../../utils/styles/conversation/ConversationHeader";

export interface ConversationHeaderProps {}

export function ConversationHeader(props: ConversationHeaderProps) {
  return (
    <ConversationHeaderStyle>
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

      <Button size="small">Profile Dropdown</Button>
    </ConversationHeaderStyle>
  );
}

export default ConversationHeader;
