import { WindowProps } from "@/interfaces";
import styles from "./DesktopWindow.module.css";
import clsx from "clsx";

export default function DesktopWindow({ title, content, style }: WindowProps) {
  return (
    <div className={clsx(styles.window, styles[style])}>
      <h3>{title.toUpperCase()}</h3>
      <div>{content}</div>
    </div>
  );
}
