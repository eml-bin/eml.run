"use client";

import { expSeed } from "@/constants/db/exp";
import styles from "./Experience.module.css";

export const Experience: React.FC = () => {
  return (
    <div className={styles.grid}>
      {expSeed.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <div className={styles.header}>
            <span className={styles.title}>
              🗂️ {item.title} <br /> ⏳ {item.exp_year} / {item.duration}
            </span>
          </div>
          {item.role != "-" && <div className={styles.role}>🪪 {item.role}</div>}
          <ul className={styles.exp}>
            {item.exp.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};
