import styles from "./MobileInfoCard.module.css";

type InfoCardProps = {
  title?: string;
  /* cualquier prop que necesites */
};

export default function MobileInfoCard({
  title = "Ventana Info",
}: InfoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.buttonGroup}>
        <button className={styles.btn}>Botón 1</button>
        <button className={styles.btn}>Botón 2</button>
        <button className={styles.btn}>Botón 3</button>
      </div>

      <div className={styles.content}>
        <h2>{title}</h2>
        {/* aquí va tu contenido */}
      </div>
    </div>
  );
}
