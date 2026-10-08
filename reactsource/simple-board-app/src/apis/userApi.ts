// 서버의 라우터와 통신
// fetch()-브라우저 함수(바로 사용 가능), axios()-설치 필요
import axios from "axios";
import type { UserLogin, UserSignup } from "../types/user";
import axiosInstance from "./axios";

const SERVER_URL = "http://localhost:8000/auth";

// 로그인
export const signin = async (data: UserLogin) => {
  const response = await axios.post(`${SERVER_URL}/login`, data);
  return response.data;
};

// 로그인 이후 사용자 정보 가져오기
export const getCurrentUser = async () => {
  const response = await axiosInstance.get(`${SERVER_URL}/me`);
  return response.data;
};

// 회원가입
export const signup = async (data: UserSignup) => {
  const response = await axios.post(`${SERVER_URL}`, data);
  return response.data;
};
