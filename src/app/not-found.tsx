import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

// 404 페이지
export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-muted-foreground">페이지를 찾을 수 없습니다.</p>
      <Link href="/" className={buttonVariants()}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
