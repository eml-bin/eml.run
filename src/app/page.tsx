import styles from "./page.module.css";
import ChatWindow from "@/components/ChatWindow/Component";
import DesktopWindow from "@/components/desktop/DesktopWindow/Component";
import MobileInfoCard from "@/components/mobile/MobileInfoCard/Component";

interface WindowConfig {
  id: string;
  type: "info" | "tools" | "other";
}

export default function Home() {
  const windows: WindowConfig[] = [
    { id: "1", type: "info" },
    { id: "2", type: "tools" },
    { id: "3", type: "other" },
    { id: "4", type: "info" },
    { id: "5", type: "info" },
    { id: "6", type: "info" },
    { id: "7", type: "info" },
    { id: "8", type: "info" },
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
        {windows.map((w, index) => (
          <DesktopWindow
            key={w.id}
            type={w.type}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
