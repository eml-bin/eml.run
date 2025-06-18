import React from "react";

export interface WindowProps {
  title: string;
  children: React.ReactNode;
  style: "data" | "bio" | "tech" | "exp";
  isMobile?: boolean;
}
