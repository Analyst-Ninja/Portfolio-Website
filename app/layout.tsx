import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

const description =
  "Rohit Kumar — Data Engineer at Moody's building data platforms, lakehouses and ML pipelines, and exploring where data meets AI.";

export const metadata: Metadata = {
  title: { default: "Rohit Kumar | Data Engineer · Data & AI", template: "%s | Rohit Kumar" },
  description,
  openGraph: { title: "Rohit Kumar | Data Engineer · Data & AI", description, type: "website" },
  twitter: { card: "summary_large_image", title: "Rohit Kumar | Data Engineer", description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
  ],
};

// Runs before paint: applies the saved theme (dark by default) and flags
// that GSAP motion will run so reveal targets start hidden. The flag is
// removed after 3s as a safety net in case scripts fail to load.
const prePaint = `try{var d=document.documentElement,t=localStorage.getItem('theme')||'dark';d.classList.toggle('dark',t==='dark');d.style.colorScheme=t;}catch(e){}
try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');setTimeout(function(){document.documentElement.classList.remove('js-motion')},3000);}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaint }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
