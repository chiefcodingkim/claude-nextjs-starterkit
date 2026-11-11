# Next.js 스타터킷

웹 개발을 빠르게 시작할 수 있는 Next.js 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 비고 |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16 | App Router, Turbopack, Cache Components |
| TypeScript | 5 | |
| [Tailwind CSS](https://tailwindcss.com) | 4 | `tailwind.config` 없이 CSS(`globals.css`)로 설정 |
| [shadcn/ui](https://ui.shadcn.com) | 최신 | `components.json`으로 관리 |
| [lucide-react](https://lucide.dev) | 최신 | 아이콘 |
| next-themes | 0.4 | 다크 모드 |

## 시작하기

요구사항: Node.js 20.9 이상

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 (Next.js 16부터 빌드 시 자동 실행되지 않음) |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run format` | Prettier 포맷 (Tailwind 클래스 자동 정렬) |

## 폴더 구조

```
src/
  app/            라우트 (layout, page, about, not-found, loading, globals.css)
  components/
    ui/           shadcn/ui 컴포넌트
    layout/       header, footer, mobile-nav
    theme-*.tsx   다크 모드
  config/site.ts  사이트 이름, 설명, 내비게이션 설정
  lib/utils.ts    cn 유틸리티
components.json   shadcn/ui 설정
```

## 자주 하는 작업

- **페이지 추가**: `src/app/<경로>/page.tsx` 생성 후 `src/config/site.ts`의 `navItems`에 추가
- **shadcn 컴포넌트 추가**: `npx shadcn@latest add <컴포넌트>` (예: `dialog`, `table`)
- **테마 색상 변경**: `src/app/globals.css`의 CSS 변수 수정
- **토스트 사용**: `import { toast } from "sonner"` 후 `toast("메시지")`

## 참고: Cache Components

Next.js 16 기본값인 Cache Components가 켜져 있어, 프리렌더 중 `new Date()` 같은 비결정 값은
`"use cache"` 또는 클라이언트 렌더링으로 처리해야 합니다 (`src/components/layout/footer.tsx` 참고).
