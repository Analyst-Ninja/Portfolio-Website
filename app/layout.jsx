import "./globals.css";

export const metadata = {
  title: "Rohit Kumar | Data Engineer",
  description:
    "Developer-style data engineering portfolio featuring pipelines, streaming systems, ETL workflows, APIs, and lakehouse exploration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
