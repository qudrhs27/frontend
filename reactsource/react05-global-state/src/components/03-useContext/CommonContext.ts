// 1. Context로 사용할 객체 생성

import { createContext, useContext } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

// 실습2
type CountContextType = {
  count: number;
  increaseCount: () => void;
};
export const CountContext = createContext<CountContextType | null>(null);

// Context 널 체크를 커스텀 hook 으로 생성
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("CountContext null");
  }
  return context;
}

type IsOnContextType = {
  isOn: boolean;
  toggle: () => void;
};
export const IsOnContext = createContext<IsOnContextType | null>(null);
