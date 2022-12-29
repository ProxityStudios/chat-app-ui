import { useRouter } from "next/router";
import * as React from "react";
import { UserLayoutStyle, UserView } from "../../utils/styles/user/UserLayout";
import Header from "../Header";
import AppNavigation from "../AppNavigation";

export interface UserLayoutProps {
  children: React.ReactNode;
}

export function UserLayout({ children }: UserLayoutProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) return;

  }, [router.isReady]);

  return (
    <UserLayoutStyle>
      <Header />

      <UserView>
        <AppNavigation />
        {children}
      </UserView>
    </UserLayoutStyle>
  );
}

export default UserLayout;
