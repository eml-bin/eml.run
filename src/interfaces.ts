import React from "react";

export interface WindowProps {
  title: string;
  content: React.ReactNode;
  style: "info" | "tools" | "exp";
}
