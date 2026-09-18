import axios from "axios";
import type { BoardUpSert, CommentsType } from "../types/board";

const url = "https://jsonplaceholder.typicode.com/posts";

export const getBoards = async (limit: number = 10) => {
  const response = await axios.get(`${url}?_limit=${limit}`);
  return response.data;
};

// https://jsonplaceholder.typicode.com/posts/1
export const getBoard = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

// 삽입
export const postBoard = async (board: BoardUpSert) => {
  const response = await axios.post(`${url}`, board);
  return response.data;
};

// 삭제
export const deleteBoard = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

// 수정
export const putBoard = async (id: string, board: BoardUpSert) => {
  const response = await axios.put(`${url}/${id}`, board);
  return response.data;
};

// 댓글 가져오기
export const getComments = async (id: string) => {
  const response = await axios.get(`${url}/${id}/comments`);
  return response.data;
};

export const postComments = async (id: string, comments: CommentsType) => {
  const response = await axios.post(`${url}/${id}/comments`, comments);
  return response.data;
};
