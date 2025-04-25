"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import styles from "./ChatWindow.module.css";
import { FiSend } from "react-icons/fi";

type Message = {
  from: "app" | "user";
  text: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "app", text: "¡Hola! ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setInput("");
  };

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`${styles.chatContainer} neon-ef`}>
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "app" ? styles.bubbleApp : styles.bubbleUser}
          >
            <br />
            <span>{m.text}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form className={styles.inputBar} onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.sendBtn}>
          <FiSend size={20} />
        </button>
      </form>
    </div>
  );
}
