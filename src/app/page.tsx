import { Layers, Moon, Palette, Zap, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Next.js App Router",
    description: "서버 컴포넌트와 Turbopack 기반의 빠른 개발 환경",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "tailwind.config 없이 CSS만으로 설정하는 유틸리티 스타일링",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description: "소스 코드로 제공되어 자유롭게 수정 가능한 UI 컴포넌트",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "next-themes 기반 시스템/라이트/다크 테마 지원",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4 py-10 text-center">
        <Badge variant="secondary">Starter Kit</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link href="/about" className={cn(buttonVariants({ size: "lg" }))}>
            시작하기
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-2 size-6 text-primary" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
