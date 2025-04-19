"use client";

import styles from "./Background.module.css";
import useBackground from "./useBackground";

const Background = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useBackground();

  return (
    <>
      <canvas ref={canvasRef} className={`${styles.canvas}`}></canvas>
      <div className={`${styles.childrenContainer}`}>{children}</div>
    </>
  );
};

export default Background;
