import { dataSeed } from "@/constants/db/data";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import styles from "./Data.module.css";

export const DataCard: React.FC = () => {
  const { personal, socialMedia } = dataSeed;

  return (
    <div className={styles.card}>
      <section className={styles.personal}>
        <h1 className={styles.name}>{personal.name}</h1>
        <p className={styles.role}>{personal.role}</p>
        <div className={styles.details}>
          <span className={styles.detailItem}>🎂 {personal.birth}</span>
          <span className={styles.detailItem}>{personal.nation}</span>
          <span className={styles.detailItem}>
            🛂 {personal.professionalLicense}
          </span>
        </div>
      </section>

      <section className={styles.social}>
        <a
          href={`tel:${socialMedia.mobile}`}
          className={styles.link}
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>
        <a
          href={`mailto:${socialMedia.mail}`}
          className={styles.link}
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href={socialMedia.linkedin}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={socialMedia.github}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={socialMedia.discord}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </section>
    </div>
  );
};
