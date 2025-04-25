import React from "react";

export interface WindowProps {
  title: string;
  children: React.ReactNode;
  style: "info" | "tools" | "exp";
}
