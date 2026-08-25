import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautham Binoy — Flutter Dev & CS Student",
  description:
    "Portfolio of Gautham Binoy — Computer Science student at MACE, Flutter developer, IoT enthusiast, and multi-award winning hackathon competitor.",
  keywords: ["Gautham Binoy", "Flutter", "Developer", "Portfolio", "MACE", "IoT", "Computer Science"],
  authors: [{ name: "Gautham Binoy" }],
  openGraph: {
    title: "Gautham Binoy — Flutter Dev & CS Student",
    description:
      "Portfolio of Gautham Binoy — CS student at MACE, Flutter developer, and hackathon champion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  );
}
