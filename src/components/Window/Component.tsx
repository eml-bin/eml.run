import { WindowProps } from "@/interfaces";
import styles from "./Window.module.css";
import clsx from "clsx";

export default function Window({
  title,
  children,
  style,
  isMobile,
}: WindowProps) {
  return (
    <div
      className={clsx(
        styles.window,
        styles[style],
        "neon-ef",
        isMobile && styles.mobile
      )}
    >
      <h1>{title.toUpperCase()}</h1>
      <div>{children}</div>
    </div>
  );
}
