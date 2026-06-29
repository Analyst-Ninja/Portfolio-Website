import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

// Minimal type system: Inter carries both display and body (weight does the
// work), JetBrains Mono is reserved for small labels, tags, and metadata.
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
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
      data-theme="light"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          // Set theme before paint to avoid a flash of the wrong theme on load.
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme')||'light';document.documentElement.dataset.theme=t;}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
