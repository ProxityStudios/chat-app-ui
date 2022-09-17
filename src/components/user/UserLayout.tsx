import { useRouter } from "next/router";
import * as React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { UserLayoutStyle, UserView } from "../../utils/styles/user/UserLayout";
import Header from "../Header";
import NavigationBar from "../NavigationBar";

export interface UserLayoutProps {
  children: React.ReactNode;
}

export function UserLayout({ children }: UserLayoutProps) {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!router.isReady) return;
    if (!user) {
      console.log("Auth failed, redirecting");
      router.push("/auth/sign-in", undefined, { shallow: true });
      return;
    }
  }, [user, router.isReady]);

  return (
    <UserLayoutStyle>
      <Header />

      <UserView>
        <NavigationBar />
        {children}
      </UserView>
    </UserLayoutStyle>
  );
}

export default UserLayout;
