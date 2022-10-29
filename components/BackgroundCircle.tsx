import React from "react";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="flex relative justify-center items-center">
      <div className="border absolute border-[#333333]  rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border absolute border-[#333333]  rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="border absolute border-[#333333]  rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="border absolute border-[#F7AB0A]  rounded-full  opacity-20 h-[650px] w-[650px] mt-52 animate-ping" />
      <div className="border absolute border-[#333333]  rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </div>
  );
}

export default BackgroundCircle;
