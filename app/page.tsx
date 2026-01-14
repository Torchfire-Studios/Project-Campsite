"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const words = ["GAMES", "STORIES", "ADVENTURES", "EXPERIENCES"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingDuration = 2000; // Time for typing animation
    const displayDuration = 1500; // Time to display the word
    const fadeDuration = 500; // Time for fade out

    const timer = setTimeout(() => {
      setIsTyping(false);

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, fadeDuration);
    }, typingDuration + displayDuration);

    return () => clearTimeout(timer);
  }, [currentWordIndex, words.length]);

  return (
    <div className="relative flex items-center justify-center min-h-screen -mt-[88px] pt-[88px]">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
      />
      {/* Content */}
      <div className="relative z-10 text-8xl font-bold text-center bg-black/40 backdrop-blur-sm rounded-xl px-24 py-12 w-[900px]">
        <h1 className="text-white mb-5">WE MAKE</h1>
        <div className="h-32 flex items-center justify-center">
          <h1
            key={currentWordIndex}
            className={`bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent typewriter ${
              isTyping ? "fade-in" : "fade-out"
            }`}
          >
            {words[currentWordIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
}

// className="font-[family-name:var(--font-anta)]"
