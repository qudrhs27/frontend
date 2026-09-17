import { createContext, useContext } from "react";

// id, password, 로그인여부(t/f), login(), logout()
type AuthContextType = {
  id: string;
  password?: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
  signup: (id: string, password: string, name: string) => void;
};

export type LoginFormState = {
  id: string;
  password: string;
};

export type SignupFormState = LoginFormState & { name: string };

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext null");
  }
  return context;
}
