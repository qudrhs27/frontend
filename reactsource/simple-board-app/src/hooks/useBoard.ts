import { useEffect, useState } from "react";
import { getBoard } from "../apis/boardApi";
import type { Board } from "../types/board";

const useBoard = (id: string | null) => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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

    fetchData();
  }, [id]);

  return { board, loading };
};

export default useBoard;
