import * as React from "react";
import { AvatarContainerStyle, AvatarStyle } from "../utils/styles/Avatar";

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

const AvatarContainer: React.ForwardRefRenderFunction<
  HTMLDivElement,
  AvatarContainerProps
> = ({ children, ...rest }, ref) => (
  <AvatarContainerStyle ref={ref} {...rest}>
    {children}
  </AvatarContainerStyle>
);

const ForwardedAvatarContainer = React.forwardRef(AvatarContainer);

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
    <ForwardedAvatarContainer {...containerProps} ref={ref}>
      <Avatar placeholder="blur" blurDataURL={props.src} {...props} />
    </ForwardedAvatarContainer>
  );
};

export default React.forwardRef(ForwardedAvatar);
