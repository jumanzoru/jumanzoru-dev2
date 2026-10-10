import type { Metadata } from "next";
import CustomCursor from "@/components/cursor";
import { AccentProvider } from "@/components/accent-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jefferson Umanzor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Google+Sans+Flex:opsz,wght@8..144,300..700&family=Outfit:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AccentProvider>
          <CustomCursor />
          {children}
        </AccentProvider>
      </body>
    </html>
  );
}
