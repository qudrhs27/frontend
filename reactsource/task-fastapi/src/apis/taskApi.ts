import axios from "axios";
import type { TaskAdd } from "../components/MainTask";

const url = "http://127.0.0.1:8000/tasks";

// 전체조회, 수정(put, patch), 삭제, 추가

export const getTasks = async (page: number, size: number) => {
  const response = await axios.get(`${url}`, { params: { page: page, size: size } });
  return response.data;
};

// 삽입
export const postTask = async (task: TaskAdd) => {
  const response = await axios.post(`${url}`, task);
  return response.data;
};

// 삭제
export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

// 수정
export const putTask = async (id: string, task: TaskAdd) => {
  const response = await axios.put(`${url}/${id}`, task);
  return response.data;
};
