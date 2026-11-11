import { siteConfig } from "@/config/site";

// 하단 푸터
// Cache Components 환경에서 new Date()는 프리렌더 시 오류가 나므로 "use cache"로 캐시합니다.
export async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
