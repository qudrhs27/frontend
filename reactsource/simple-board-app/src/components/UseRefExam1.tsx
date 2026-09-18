import { useRef, useState } from "react";

const UseRefExam1 = () => {
  const [stateNum, setStateNum] = useState(0);
  const refNum = useRef(0);
  let myNum = 0;

  const plusState = () => {

  };
  const plusRef = () => {

  };
  const plusMyNum = () => {
    console.log("일반 변수 증가", ++myNum);
  };

  return (
    <div>
      <h2 className="text-2xl">useRef 사용하기</h2>
      <div className="flex flex-col gap-2 m-3">
        <p>State : </p>
        <p>Ref : </p>
        <p>myNum : </p>
      </div>
      <div className="flex gap-2 m-3">
        <button className="border border-orange-500 p-2 m-2" onClick="">
          State 증가
        </button>
        <button className="border border-orange-500 p-2 m-2" onClick="">
          Ref 증가
        </button>
        <button className="border border-orange-500 p-2 m-2 " onClick="">
          myNum 증가
        </button>
      </div>
    </div>
  );
};

export default UseRefExam1;
