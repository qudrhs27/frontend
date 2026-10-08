import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../apis/userApi";
import axios from "axios";

const SignupPage = () => {
  // 에러메세지
  const [errorMessage, setErrorMessage] = useState("");

  // 이동
  const navigate = useNavigate();

  // form => useState()
  const [signupForm, setSignupForm] = useState({
    email: "",
    name: "",
    password: "",
    passwordCheck: "",
  });

  const { email, name, password, passwordCheck } = signupForm;

  //  onChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // 회원가입 클릭 시 성공 => 로그인 페이지로 이동, 실패 시 에러메세지 setErrorMessage
  // password, passwordCheck 값이 동일한지? 동일하지 않다면 이전 비밀번호와 다릅니다 메시지 보여주기
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!*$-]).{8,64}$/;
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (passwordRegex.test(password)) {
      setErrorMessage("비밀번호는 8~64자이며 대문자,소문자,숫자,특수문자(@!*$-)를 각각 1자 이상 포함해야 합니다.");
      return;
    }

    if (password !== passwordCheck) {
      setErrorMessage("이전 비밀번호와 다릅니다.");
      return;
    }

    try {
      const result = await signup({ email, password, name });
      alert(`${result.user_id}님 ${result.message}`);
      navigate("/users/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data.detail;

        if (Array.isArray(detail)) {
          setErrorMessage(detail[0].msg ?? "비밀번호 입력값이 올바르지 않습니다.");
        } else {
          setErrorMessage(detail ?? "회원가입에 실패했습니다.");
        }
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">회원가입</h1>

        <p className="mb-8 text-sm text-gray-500">Dev Board 계정을 만들어보세요.</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium">이메일</label>

            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">이름</label>

            <input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">비밀번호</label>

            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">비밀번호 확인</label>

            <input
              name="passwordCheck"
              type="password"
              value={passwordCheck}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>
          {/* 가입 실패시 에러 메시지 보여주기 */}
          {errorMessage && (
            <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            회원가입
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          이미 계정이 있으신가요?
          <Link to="/users/signin" className="font-medium text-indigo-600 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
