import { WindowProps } from "@/interfaces";
import styles from "./DesktopWindow.module.css";
import clsx from "clsx";

export default function DesktopWindow({ title, children, style }: WindowProps) {
  return (
    <div className={clsx(styles.window, styles[style], "neon-ef")}>
      <h1>{title.toUpperCase()}</h1>
      <div>{children}</div>
    </div>
  );
}
