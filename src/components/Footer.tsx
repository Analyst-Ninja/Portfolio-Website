import { profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container-page flex flex-col gap-2 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js, GSAP &amp; shadcn/ui</span>
      </div>
    </footer>
  );
}
