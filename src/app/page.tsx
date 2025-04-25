import styles from "./page.module.css";
import ChatWindow from "@/components/ChatWindow/Component";
import DesktopWindow from "@/components/desktop/DesktopWindow/Component";
import MobileInfoCard from "@/components/mobile/MobileInfoCard/Component";
import { WindowProps } from "@/interfaces";

export default function Home() {
  const windowsData: WindowProps[] = [
    {
      title: "Info",
      children: <div>info</div>,
      style: "info",
    },
    {
      title: "Experience",
      children: <div>tools</div>,
      style: "tools",
    },
    {
      title: "Experience",
      children: <div>exp</div>,
      style: "exp",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {/* Ventana info (solo móvil) */}
      <div className={styles.info}>
        <MobileInfoCard />
      </div>

      {/* Ventana chat (visible en ambos) */}
      <div className={styles.chat}>
        <ChatWindow />
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
