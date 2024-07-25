import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div
      style={{ height: "100%" }}
      className={" flex flex-col justify-center items-center gap-4 flex-1"}
    >
      <GridLoader color={"red"} />
      <div>잠시 후 다시 확인해주세요</div>
      <button>뒤로가기</button>
    </div>
  );
};

export default ErrorMessage;
