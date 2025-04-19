import styles from "./DesktopWindow.module.css";
import clsx from "clsx";

interface Props {
  type: "info" | "tools" | "other";
  position: "left" | "right";
}

export default function DesktopWindow({ type, position }: Props) {
  return (
    <div className={clsx(styles.window, styles[position], styles[type])}>
      <h3>{type.toUpperCase()}</h3>
      <p>Contenido de la subventana {type}</p>
    </div>
  );
}
