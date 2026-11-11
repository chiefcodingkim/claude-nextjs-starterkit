import { Loader2 } from "lucide-react";

// 라우트 전환 시 표시되는 로딩 UI
export default function Loading() {
  return (
    <div className="flex justify-center py-20">
      <Loader2 className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}
