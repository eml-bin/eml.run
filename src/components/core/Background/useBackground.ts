import { CODEX } from "@/constants/eml";
import { useEffect, useRef, RefObject, useState } from "react";

export default function useBackground(): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    const fontSize =
      22 + Math.max(0, Math.floor((windowSize.width - 800) / 100)) * 4;

    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const timer = setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#1AF597";
      ctx.font = `${fontSize}px aztek`;

      drops.forEach((y, i) => {
        const x = i * fontSize;
        const text = CODEX[Math.floor(Math.random() * CODEX.length)];
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [windowSize]);

  useEffect(() => {
    function onResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return canvasRef;
}
