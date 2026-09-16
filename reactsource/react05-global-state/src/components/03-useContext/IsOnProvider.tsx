import { useState, type ReactNode } from "react";
import { IsOnContext } from "./CommonContext";

const IsOnProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);
  return <IsOnContext.Provider value={{ isOn, toggle }}>{children}</IsOnContext.Provider>;
};

export default IsOnProvider;
