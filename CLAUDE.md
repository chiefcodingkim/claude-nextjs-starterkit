# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev           # 개발 서버 (Turbopack, http://localhost:3000)
npm run build         # 프로덕션 빌드 (lint는 자동 실행되지 않음)
npm run lint          # ESLint (flat config: eslint.config.mjs)
npm run typecheck     # tsc --noEmit
npm run format        # Prettier (Tailwind 클래스 자동 정렬)
npm run format:check
```

- 테스트 프레임워크는 설정되어 있지 않습니다.
- 요구사항: Node.js 20.9 이상. 환경 변수는 `.env.example`을 `.env.local`로 복사해 사용합니다.

## 중요: Next.js 16 (학습 데이터와 다름)

`AGENTS.md`의 지침대로, Next.js 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽습니다. API와 규칙이 기존 지식과 다를 수 있습니다. (React 19.3, Tailwind 4.3)

## 아키텍처

App Router 기반(`src/app`), 경로 별칭 `@/*` → `src/*`.

- **Cache Components 활성화** (`next.config.ts`의 `cacheComponents: true`, `partialPrefetching: true`): 프리렌더 중 `new Date()` 같은 비결정 값은 `"use cache"` 또는 클라이언트 렌더링으로 처리해야 합니다. 예: `src/components/layout/footer.tsx`는 `"use cache"`를 사용합니다.
- **라우트 타입 헬퍼**: 레이아웃은 전역 `LayoutProps<"/">` 타입을 사용합니다 (`src/app/layout.tsx`).
- **사이트 설정 단일 출처**: `src/config/site.ts`의 `siteConfig`(이름, 설명, `navItems`)를 metadata, 헤더, 모바일 내비게이션, 푸터가 공유합니다. 페이지를 추가하면 `navItems`에도 등록해야 내비게이션에 노출됩니다.
- **루트 레이아웃** (`src/app/layout.tsx`): `ThemeProvider`(next-themes, `attribute="class"`, 시스템 테마 기본) → `Header` / `<main max-w-5xl>` / `Footer` / `Toaster`(sonner). `<html>`에 `suppressHydrationWarning`이 필요합니다.
- **Tailwind v4**: `tailwind.config` 없이 `src/app/globals.css`의 `@theme inline`과 CSS 변수로 테마를 관리하며, Turbopack 규칙(`@tailwindcss/turbopack`)으로 CSS를 처리합니다. 다크 모드는 `.dark` 클래스 기반 `@custom-variant`입니다. Prettier는 `globals.css`를 기준으로 Tailwind 클래스를 정렬합니다.

## shadcn/ui

- `components.json`: 스타일 `base-nova`, 프리미티브는 Radix가 아닌 **`@base-ui/react`** 입니다. 아이콘은 lucide-react.
- 컴포넌트 추가: `npx shadcn@latest add <컴포넌트>` → `src/components/ui/`에 생성됩니다.
- `cn` 유틸은 `cn` npm 패키지에서 가져옵니다. `src/lib/utils.ts`는 이를 재export하며, `ui/*` 컴포넌트는 `"cn"`을 직접 import하고 앱 코드는 `@/lib/utils`를 사용합니다.

## 컨벤션

- 응답/주석/문서/커밋 메시지는 한국어, 변수·함수명은 영어. 들여쓰기 2칸, 세미콜론 사용(Prettier 설정).
- 사이트 UI 문구는 한국어(`<html lang="ko">`)입니다.
