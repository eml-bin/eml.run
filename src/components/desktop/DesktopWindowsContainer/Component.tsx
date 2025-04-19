"use client";

import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./DesktopWindowsContainer.module.css";
import DesktopWindow, { DesktopWindowProps } from "../DesktopWindow/Component";

export interface WindowConfig extends Omit<DesktopWindowProps, "children"> {
  /** Un key único */
  id: string;
  /** Contenido de la ventana */
  content: ReactNode;
}

export default function DesktopWindowsContainer({
  windows,
}: {
  windows: WindowConfig[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spans, setSpans] = useState<number[]>([]);

  useEffect(() => {
    if (!ref.current) return;
    const rowH = parseInt(
      getComputedStyle(ref.current).getPropertyValue("grid-auto-rows"),
      10
    );
    const nuevos = Array.from(ref.current.children).map((child) => {
      const h = (child as HTMLElement).getBoundingClientRect().height;
      return Math.ceil(h / rowH);
    });
    setSpans(nuevos);
  }, [windows]);

  return (
    <div ref={ref} className={styles.container}>
      {windows.map((w, i) => (
        <DesktopWindow
          key={w.id}
          type={w.type}
          spanCols={w.spanCols}
          spanRows={spans[i] || w.spanRows}
          style={w.style}
        >
          {w.content}
        </DesktopWindow>
      ))}
    </div>
  );
}
