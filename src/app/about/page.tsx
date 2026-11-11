import type { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "소개",
};

// 라우팅 예시 페이지: src/app/about/page.tsx → /about
export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">소개</h1>
      <Separator />
      <p className="text-muted-foreground">
        이 페이지는 App Router의 파일 기반 라우팅 예시입니다. 새 페이지는
        src/app 아래에 폴더와 page.tsx를 추가하고, 내비게이션은
        src/config/site.ts에서 관리하세요.
      </p>
    </div>
  );
}
