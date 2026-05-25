import React, { useState, useEffect } from 'react';

const BioTypewriter = ({ segments, speed = 15 }) => {
  const [charsTyped, setCharsTyped] = useState(0);
  const totalChars = segments.reduce((sum, seg) => sum + seg.text.length, 0);

  useEffect(() => {
    let interval;
    if (charsTyped < totalChars) {
      interval = setInterval(() => {
        setCharsTyped((prev) => prev + 1);
      }, speed);
    }
    return () => clearInterval(interval);
  }, [charsTyped, totalChars, speed]);

  let charsRemaining = charsTyped;
  const renderedSegments = [];

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (charsRemaining <= 0) break;

    if (charsRemaining >= seg.text.length) {
      renderedSegments.push({ ...seg });
      charsRemaining -= seg.text.length;
    } else {
      renderedSegments.push({ ...seg, text: seg.text.slice(0, charsRemaining) });
      charsRemaining = 0;
    }
  }

  const renderTextWithNewlines = (text) => {
    return text.split('\n\n').map((part, i, arr) => (
      <React.Fragment key={i}>
        {part}
        {i < arr.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="inline">
      {renderedSegments.map((seg, idx) => (
        <span
          key={idx}
          className={seg.highlight ? 'text-cyan-200 font-semibold' : ''}
        >
          {renderTextWithNewlines(seg.text)}
        </span>
      ))}
      {charsTyped < totalChars && (
        <span className="inline-block w-[2px] h-[1em] bg-zinc-400 align-middle ml-1 animate-pulse" />
      )}
    </div>
  );
};

export default BioTypewriter;
