import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  idx: number;
  contents: string;
  done: boolean;
}

export type LoginFormState = {
  id: string;
  password: string;
};

export type SignupFormState = LoginFormState & { name: string };

const initialState: LoginFormState = { id: "", password: "" };

// 등록, 삭제, 전체삭제, done 수정(t<=>f)
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginFormState>) => {
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.id = "";
      state.password = "";
    },
  },
});

// 액션 함수 내보내기
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
