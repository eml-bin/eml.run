"use client";

import { dataSeed } from "@/constants/db/data";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import styles from "./Data.module.css";
import { useState } from "react";
import clsx from "clsx";

export const Data: React.FC = () => {
  const { personal, contact, socialMedia } = dataSeed;
  const [copied, setCopied] = useState<string | null>(null);

  const buildMeta = (personal: { birth: number; nation: string }) => {
    return { nacimiento: personal.birth, nación: personal.nation };
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className={styles.content}>
      <section className={clsx(styles.section, styles.principal)}>
        <p className={styles.name}>{personal.name}</p>
        <p className={styles.role}>
          {personal.role}
          <ul>
            <li>{personal.professionalActivity}</li>
            <li>{personal.professionalLicense}</li>
          </ul>
        </p>
      </section>

      <hr className={styles.separator} />

      <section className={styles.section}>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span
            onClick={() => handleCopy(contact.mobile)}
            className={styles.copyText}
          >
            {contact.mobile}
            {copied === contact.mobile && (
              <span className={styles.copied}> (copiado)</span>
            )}
          </span>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span
            onClick={() => handleCopy(contact.mail)}
            className={styles.copyText}
          >
            {contact.mail}
            {copied === contact.mail && (
              <span className={styles.copied}> (copiado)</span>
            )}
          </span>
        </div>
      </section>

      <hr className={styles.separator} />

      <section className={styles.social}>
        <a
          href={socialMedia.linkedin}
          target="_blank"
          className={clsx(styles.socialLink, styles.linkedin)}
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={socialMedia.github}
          target="_blank"
          className={clsx(styles.socialLink, styles.github)}
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={socialMedia.discord}
          target="_blank"
          className={clsx(styles.socialLink, styles.discord)}
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </section>

      <hr className={styles.separator} />

      <section className={styles.section}>
        <pre className={styles.meta}>
          {JSON.stringify(buildMeta(personal), null, 2)}
        </pre>
      </section>
    </div>
  );
};
