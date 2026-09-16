import { useContext } from "react";
import { IsOnContext } from "./CommonContext";

const Child4 = () => {
  const context = useContext(IsOnContext);
  if (!context) {
    throw new Error("IsOnContext null");
  }

  const { toggle } = context;

  return (
    <div>
      <button className="border px-4" onClick={toggle}>
        isOn 변경
      </button>
    </div>
  );
};

const Child3 = () => {
  // isOn 가져오기
  const context = useContext(IsOnContext);

  if (!context) {
    throw new Error("IsOnContext null");
  }

  const { isOn } = context;

  return (
    <div>
      <Child4 />
      <p>{isOn ? "On" : "Off"}</p>
    </div>
  );
};

export default Child3;
