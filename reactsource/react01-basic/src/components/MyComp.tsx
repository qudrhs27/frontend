import BackComp from "./BackComp";
import FormComp from "./FormComp";
import FrontComp from "./FrontComp";

const MyComp = () => {
  return (
    <div>
      {/* 개별 컴포넌트 삽입 */}
      <h2>React - Component</h2>
      <ol>
        <FrontComp />
        <BackComp />
      </ol>
      <FormComp />
    </div>
  );
};

export default MyComp;
