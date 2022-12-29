import { useRouter } from "next/router";
import * as React from "react";
import { UserLayoutStyle, UserView } from "../../utils/styles/user/UserLayout";

import AppNavigation from "../AppNavigation";

export interface UserLayoutProps {
  children: React.ReactNode;
}

export function UserLayout({ children }: UserLayoutProps) {
  const router = useRouter();

  return (
    <UserLayoutStyle>

      <UserView>
        <AppNavigation />
        {children}
      </UserView>
    </UserLayoutStyle>
  );
}

export default UserLayout;
