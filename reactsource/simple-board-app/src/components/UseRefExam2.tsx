import { useEffect, useRef } from "react";

const UseRefExam2 = () => {

  const passRef1 = useRef<HTMLInputElement | null>(null);
  const passRef2 = useRef<HTMLInputElement | null>(null);


  useEffect(() => {

  }, []);

  // 패스워드 검증 함수 정의
  const checkPassword = () => {
    if (!passRef1.current?.value || passRef2.current?.value == '') {

    }

    if (passRef1.current?.value === passRef2.current?.value) {

    } else {

      if (passRef1.current && passRef2.current) {


      }
    }
  }

  return (
    <div>
      <h2 className="text-2xl">useRef 사용하기2</h2>
      <div className="flex flex-col gap-2 m-3">
        <form action="">
          <div>
            <label htmlFor="">패스워드1</label>
            <input type="password" name="pass1" className="border-2 border-sky-200 outline-none focus:border-sky-700" />
          </div>
          <div>
            <label htmlFor="">패스워드2</label>
            <input type="password" name="pass2" className="border border-black" />
          </div>
          <button type="button" className="border bg-orange-300 p-3" onClick="">패스워드 확인</button>
        </form>
      </div>
    </div>
  );
};

export default UseRefExam2;
