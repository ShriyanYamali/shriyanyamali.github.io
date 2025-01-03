import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["writer.", "student.", "innovator.", "programmer.", "Delawarean.", "designer.", "dreamer.", "leader."];

  return (
    <>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 xtl:hidden">
        Hi, I&rsquo;m a
        <FlipWords words={words} /> 
      </div>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 hidden xtl:block">
        Hi, I&rsquo;m a <br />
        <FlipWords words={words} />
      </div>
    </>
  );
}
