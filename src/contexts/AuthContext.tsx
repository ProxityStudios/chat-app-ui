import * as React from "react";
import { User } from "../utils/types";

interface AuthContextType {
  user: User | null;
  login(email: string, password: string): void;
  logout(): void;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);

  function login(email: string, password: string) {
    console.log("Inside login");

    // dummy
    setUser({
      id: "01",
      displayName: "Ticho Is Engineer",
      email,
      password,
      avatarUrl: "https://github.com/Tichooo",
    });
  }
  function logout() {
    console.log("Inside logout");
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
