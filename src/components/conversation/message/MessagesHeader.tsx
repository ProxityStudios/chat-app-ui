import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import {
  AuthorAction,
  AuthorActions,
  AuthorContentView,
  AuthorContentViewContent,
  AuthorContentViewHeading,
  AuthorView,
  MessagesHeaderStyle,
} from "../../../utils/styles/conversation/message/MessagesHeader";
import Avatar from "../../Avatar";

export interface MessagesHeaderProps {}

export function MessagesHeader(props: MessagesHeaderProps) {
  return (
    <MessagesHeaderStyle>
      <Link href="#" passHref>
        <AuthorView>
          <Avatar size={75} src="https://github.com/profile.png" />
          <AuthorContentView>
            <AuthorContentViewHeading>
              Nmaod Hmandosund
            </AuthorContentViewHeading>
            <AuthorContentViewContent>
              Biography | Online status etc.
            </AuthorContentViewContent>
          </AuthorContentView>
        </AuthorView>
      </Link>
      <AuthorActions>
        <AuthorAction>
          <HiOutlineVideoCamera size={50} />
        </AuthorAction>
        <AuthorAction>
          <BsTelephone size={35} />
        </AuthorAction>
        <AuthorAction>
          <RiUserSettingsLine size={35} />
        </AuthorAction>
      </AuthorActions>
    </MessagesHeaderStyle>
  );
}

export default MessagesHeader;
