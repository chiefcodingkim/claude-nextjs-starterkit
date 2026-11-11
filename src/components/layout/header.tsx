import { Rocket } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

// 상단 헤더: 로고, 데스크톱 내비게이션, 테마 전환, 모바일 메뉴
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4">
        <MobileNav />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
