import * as React from "react";
import {
  AvatarContainerStyle,
  AvatarStyle,
} from "../../utils/styles/conversation/ConversationAvatar";

export type AvatarContainerType = typeof AvatarContainerStyle;
export type AvatarType = typeof AvatarStyle;

export interface AvatarContainerProps
  extends React.ComponentPropsWithRef<AvatarContainerType> {
  children: React.ReactNode;
}
export interface AvatarProps
  extends React.ComponentPropsWithoutRef<AvatarType> {
  size: string | number;
  src: string;
}

function AvatarContainer({ children, ...rest }: AvatarContainerProps) {
  return <AvatarContainerStyle {...rest}>{children}</AvatarContainerStyle>;
}

function Avatar({ size, ...rest }: AvatarProps) {
  return <AvatarStyle width={size} height={size} {...rest} />;
}

export type CombinedProps = AvatarProps & {
  containerProps?: AvatarContainerProps;
};
const ForwardedAvatar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CombinedProps
> = ({ containerProps, ...props }, ref) => {
  return (
    <AvatarContainer {...containerProps} ref={ref}>
      <Avatar placeholder="blur" blurDataURL={props.src} {...props} />
    </AvatarContainer>
  );
};

export default React.forwardRef(ForwardedAvatar);
