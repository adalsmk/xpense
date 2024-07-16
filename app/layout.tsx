import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "XPENSE",
  description: "Rastreador de despesas",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>{children}</body>
    </html>
  );
} 
