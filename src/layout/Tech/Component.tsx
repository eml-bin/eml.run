"use client";

import { techSeed } from "@/constants/db/tech";
import styles from "./Tech.module.css";

export const Tech: React.FC = () => {
  return (
    <div className={styles.columns}>
      {Object.entries(techSeed).map(([key, { emoji, title, tech }]) => (
        <div key={key} className={styles.category}>
          <span>
            {emoji} {title}
          </span>
          <div className={styles.techList}>
            {tech.map((item) => (
              <div key={item} className={styles.techItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
