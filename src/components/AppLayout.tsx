import { useRouter } from "next/router";
import { AppLayoutContainerStyle, AppLayoutContentStyle } from "../utils/styles/AppLayout";
import AppNavigation from "./AppNavigation";


export interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const router = useRouter();

  return (
    <AppLayoutContainerStyle>
      <AppNavigation />
      <AppLayoutContentStyle>{props.children}</AppLayoutContentStyle>
    </AppLayoutContainerStyle>
  );
}

export default AppLayout;
