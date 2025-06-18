import styles from "./page.module.css";
import Window from "@/components/Window/Component";
import MobileContainer from "@/components/MobileContainer/Component";
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
  ];

  return (
    <div className={styles.gridContainer}>
      {/* Ventana info (solo móvil) */}
      <div className={styles.info}>
        <MobileContainer />
      </div>

      {/* Contenedor Ventanas (solo escritorio) */}

      <div className={styles.windows}>
        {windowsData.map((win, idx) => (
          <Window key={idx} title={win.title} style={win.style}>
            {win.children}
          </Window>
        ))}
      </div>
    </div>
  );
}
