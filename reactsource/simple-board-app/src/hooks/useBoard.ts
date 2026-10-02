import { useEffect, useState } from "react";
import { getBoard } from "../apis/boardApi";
import type { BoardResponse } from "../types/board";

export const initialBoard: BoardResponse = {
  id: 0,
  title: "",
  contents: "",
  user_id: 0,
  created_at: "",
  comments: [],
  user: {
    user_id: 0,
    name: "",
  },
};

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<BoardResponse>(initialBoard);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      // id가 없는경우
      if (!id) return;

      // 서버로 데이터 요청
      const serverData = await getBoard(id);
      setBoard(serverData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return { board, loading, refresh: fetchData };
};

export default useBoard;
