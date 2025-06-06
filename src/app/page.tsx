import styles from "./page.module.css";
import DesktopWindow from "@/components/DesktopWindow/Component";
import MobileInfoCard from "@/components/MobileInfoCard/Component";
import { WindowProps } from "@/interfaces";
import { Data } from "@/layout/Data/Component";
import { Experience } from "@/layout/Experience/Component";
import { Tech } from "@/layout/Tech/Component";

export default function Home() {
  const windowsData: WindowProps[] = [
    {
      title: "🧑‍💻",
      children: <Data />,
      style: "data",
    },
    {
      title: "🧰",
      children: <Tech />,
      style: "tech",
    },
    {
      title: "🌌",
      children: <Experience />,
      style: "exp",
    },
    {
      title: "🫀",
      children: <div>...</div>,
      style: "bio",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {/* Ventana info (solo móvil) */}
      <div className={styles.info}>
        <MobileInfoCard />
      </div>

      {/* Contenedor Ventanas (solo escritorio) */}

      <div className={styles.windows}>
        {windowsData.map((win, idx) => (
          <DesktopWindow key={idx} title={win.title} style={win.style}>
            {win.children}
          </DesktopWindow>
        ))}
      </div>
    </div>
  );
}
