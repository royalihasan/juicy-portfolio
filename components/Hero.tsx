import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I am the Future", "<hello>Roy Ali Hasan</hello>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <h1 className="text-white">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
