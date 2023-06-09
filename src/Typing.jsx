import React, { useState, useEffect } from "react";

const Typing = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const words = [
    "developer.",
    "student.",
    "visionary.",
    "book enjoyer.",
    "TV connoisseur.",
    "salsero.",
    "firefighter.",
    "cyclist.",
    "leader.",
    "hobbyist.",
    "professional."
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (text.length < words[wordIndex].length) {
          setText(prevText => words[wordIndex].slice(0, prevText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(prevText => prevText.slice(0, prevText.length - 1));
        } else {
          setWordIndex(prevIndex => (prevIndex + 1) % words.length)
          setIsTyping(true);
        }
      }
    }, isTyping ? 125 : 75);

    return () => clearInterval(typingInterval);
  }, [text, isTyping, wordIndex, words]);

  return (
    <div>
      <span className="mr-0.5 typingSize" style={{ color: 'white' }}>I'm a {text}</span>
      <span id="cursor"></span>
    </div>
  );
};

export default Typing;
