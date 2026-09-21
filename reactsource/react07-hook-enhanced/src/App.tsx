import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavi from "./components/TopNavi";
import UseOptimisticExam from "./components/UseOptimisticExam";
import UseActionStateExam from "./components/UseActionStateExam";
import UseFormStatusExam from "./components/UseFormStatusExam";

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/use-optimistic" element={<UseOptimisticExam />} />
        <Route path="/use-action-state" element={<UseActionStateExam />} />
        <Route path="/use-form-status" element={<UseFormStatusExam />} />
      </Routes>
    </>
  );
}

export default App;
