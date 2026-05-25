import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorCat() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth following physics
  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const catX = useSpring(mouseX, springConfig);
  const catY = useSpring(mouseY, springConfig);

  const [isFlipped, setIsFlipped] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let lastX = -100;
    let timeout;
    
    const handleMouseMove = (e) => {
      // Offset so the cat trails behind the cursor and doesn't block clicks
      mouseX.set(e.clientX + 10);
      mouseY.set(e.clientY + 10); 
      
      // Determine direction for flipping the cat
      if (e.clientX < lastX - 2) {
        setIsFlipped(true); // Moving left
      } else if (e.clientX > lastX + 2) {
        setIsFlipped(false); // Moving right
      }
      lastX = e.clientX;
      
      setIsMoving(true);
      
      // Stop moving animation when cursor stops
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: catX,
        y: catY,
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
      }}
      // "smallest" size as requested
      className="text-[12px] sm:text-[14px]"
    >
      <motion.div
        animate={{
          scaleX: isFlipped ? -1 : 1,
          y: isMoving ? [0, -4, 0] : 0,
          rotate: isMoving ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 0.25,
            ease: "easeInOut"
          },
          rotate: {
            repeat: Infinity,
            duration: 0.25,
            ease: "linear"
          },
          scaleX: {
            duration: 0.1 // quick flip
          }
        }}
      >
        🐈
      </motion.div>
    </motion.div>
  );
}
