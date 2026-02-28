import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackRoad OS",
  description: "The Operating System for Governed AI",
};

export default function OSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
