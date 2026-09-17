import { useState, type ReactNode } from "react";
import { AuthContext, type LoginFormState, type SignupFormState } from "./AuthContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<LoginFormState>({
    id: "",
    password: "",
  });

  const [signupInfo, setSignupInfo] = useState<SignupFormState>({
    id: "",
    password: "",
    name: "",
  });

  // const login = (id: string, password: string) => setAuth({ id: id, password: password });
  const login = (id: string, password: string) => setAuth({ id, password });
  const logout = () => setAuth({ id: "", password: "" });
  const signup = (id: string, password: string, name: string) => setSignupInfo({ id, password, name });

  // 공유할 state
  const value = {
    id: auth.id,
    isLoggedIn: auth.id !== "",
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
