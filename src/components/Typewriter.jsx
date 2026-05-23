import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const words = [
  "Chief operating officer",
  "Full stack engineer",
  "Generative Ai engineer"
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setBlink(!blink);
    }, 500);
    return () => clearTimeout(cursorTimeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    const currentWord = words[index];

    if (subIndex === currentWord.length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => {
        setReverse(true);
      }, 2000); // pause at the end of the word
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === currentWord.length ? 1000 : 100, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const text = words[index].substring(0, subIndex);

  return (
    <span>
      <span className="bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
        {text}
      </span>
      <m.span
        initial={{ opacity: 1 }}
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="ml-1 inline-block w-[3px] bg-cyan-200 align-middle h-[1em]"
      />
    </span>
  );
};

export default Typewriter;
