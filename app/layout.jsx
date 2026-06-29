import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Rohit Kumar | Data Engineer",
  description:
    "Data engineer building reliable streaming, ETL, and lakehouse pipelines. Selected projects, stack, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          // Set theme before paint to avoid a flash of the wrong theme on load.
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme')||'dark';document.documentElement.dataset.theme=t;}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
