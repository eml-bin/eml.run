"use client";

import { useState, FormEvent } from "react";
import styles from "./ChatWindow.module.css";

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
    // aquí podrías disparar la respuesta de la “app”
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "app" ? styles.bubbleApp : styles.bubbleUser}
          >
            {m.text}
          </div>
        ))}
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
          Enviar
        </button>
      </form>
    </div>
  );
}
