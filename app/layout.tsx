import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-70KYVC7CWL";

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
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
