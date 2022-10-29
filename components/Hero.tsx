import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import avatar from "../assets/images/avatar.jpeg";
import Image from "next/image";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I am the Future", "My Name is -", "<hello>Roy Ali Hasan</hello>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-10">
      <BackgroundCircle />
      <Image
        src={avatar}
        className="rounded-full mx-auto h-32 w-32 object-cover"
        alt={"Avatar"}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Engineer{" "}
        </h2>
        <h1 className="text-white md:text-5xl lg:6xl text-3xl font-semibold  px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="space-x-3 text-gray-500 mt-3">
          <button className="cursor-pointer border border-gray-500 rounded-full p-2 hover:bg-gray-500 hover:text-white">
            About
          </button>
          <button className="pointer-cursor">Experience</button>
          <button className="pointer-cursor">Skills</button>
          <button className="pointer-cursor">Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
