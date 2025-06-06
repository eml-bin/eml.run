"use client";
import { JSX, useState } from "react";
import { Experience } from "@/layout/Experience/Component";
import { Tech } from "@/layout/Tech/Component";
import { Data } from "@/layout/Data/Component";
import styles from "./MobileInfoCard.module.css";
import clsx from "clsx";
import DesktopWindow from "@/components/DesktopWindow/Component";

const mobileWindows: {
  title: string;
  style: "data" | "tech" | "exp";
  component: JSX.Element;
}[] = [
  {
    title: "🧑‍💻",
    style: "data",
    component: <Data />,
  },
  {
    title: "🧰",
    style: "tech",
    component: <Tech />,
  },
  {
    title: "🌌",
    style: "exp",
    component: <Experience />,
  },
];

export default function MobileInfoCard() {
  const [activeStyle, setActiveStyle] = useState<"data" | "tech" | "exp">(
    "data"
  );
  const [fadeState, setFadeState] = useState<"fadeIn" | "fadeOut">("fadeIn");

  const handleClick = (style: "data" | "tech" | "exp") => {
    if (style === activeStyle) return;
    setFadeState("fadeOut");

    setTimeout(() => {
      setActiveStyle(style);
      setFadeState("fadeIn");
    }, 150); // 150ms = duración de la transición CSS
  };

  const activeWindow = mobileWindows.find((w) => w.style === activeStyle);

  return (
    <div className={styles.card}>
      <div className={styles.buttonGroup}>
        {mobileWindows.map((w) => (
          <button
            key={w.style}
            className={clsx(
              styles.btn,
              activeStyle === w.style && styles.active
            )}
            onClick={() => handleClick(w.style)}
          >
            {w.title}
          </button>
        ))}
      </div>

      <div className={clsx(styles.content, styles[fadeState])}>
        {activeWindow && (
          <DesktopWindow title={activeWindow.title} style={activeWindow.style}>
            {activeWindow.component}
          </DesktopWindow>
        )}
      </div>
    </div>
  );
}
