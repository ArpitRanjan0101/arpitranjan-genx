import React, { useState, useEffect } from 'react';

const BioTypewriter = ({ text, speed = 15 }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {currentText.split('\n\n').map((p, idx) => (
        <p key={idx}>
          {p}
          {idx === currentText.split('\n\n').length - 1 && currentText.length < text.length && (
            <span className="inline-block w-[2px] h-[1em] bg-zinc-400 align-middle ml-1 animate-pulse" />
          )}
        </p>
      ))}
    </>
  );
};

export default BioTypewriter;
