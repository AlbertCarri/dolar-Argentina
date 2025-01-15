'use client';

import { useState, useEffect } from "react";

export default function UseTimer(initial) {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0)
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time
}


