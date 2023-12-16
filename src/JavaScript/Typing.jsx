import React, { useState, useEffect } from "react";

const Typing = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const words = [
    "visionary.",
    "software dev.",
    "student.",
    "book enthusiast.",
    "TV connoisseur.",
    "salsa dancer.",
    "firefighter.",
    "cyclist.",
    "leader.",
    "language learner.",
    "traveler.",
  ];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const typingInterval = setInterval(
      async () => {
        if (isTyping) {
          if (text.length < words[wordIndex].length) {
            setText((prevText) =>
              words[wordIndex].slice(0, prevText.length + 1),
            );
          } else {
            await delay(500);
            setIsTyping(false);
          }
        } else {
          if (text.length > 0) {
            setText((prevText) => prevText.slice(0, prevText.length - 1));
          } else {
            setWordIndex((prevIndex) => {
              const newIndex = (prevIndex + 1) % words.length;
              return newIndex;
            });
            setIsTyping(true);
          }
        }
      },
      isTyping ? 125 : 75,
    );

    return () => clearInterval(typingInterval);
  }, [text, isTyping, wordIndex, words]);

  return (
    <div>
      <span
        className="mr-0.5 text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
        style={{ color: "white" }}
      >
        I'm a {text}
      </span>
      <span id="cursor"></span>
    </div>
  );
};

export default Typing;
