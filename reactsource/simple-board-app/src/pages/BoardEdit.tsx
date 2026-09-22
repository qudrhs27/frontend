import { useNavigate, useParams } from "react-router-dom";
import { putBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import useBoard from "../hooks/useBoard";
import type { BoardUpSert } from "../types/board";

const BoardEdit = () => {
  // 1. get  => 수정하는 대상을 가져와서 화면에 보여주기
  // detail과 같은 코드
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading } = useBoard(id);

  const onSubmit = async (board: BoardUpSert) => {
    if (!id) return;

    try {
      const result = await putBoard(id, board);
      console.log("수정된 board ", result);

      // 페이지 이동 => 상세조회
      navigate(`/boards/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!board) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <BoardForm onSubmit={onSubmit} board={board} />
    </div>
  );
};

export default BoardEdit;
