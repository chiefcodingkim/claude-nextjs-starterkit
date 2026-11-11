// 사이트 전역 설정: 이름, 설명, 내비게이션을 이곳에서 한 번에 관리합니다.
export const siteConfig = {
  name: "Next.js 스타터킷",
  description:
    "Next.js, Tailwind CSS v4, shadcn/ui로 빠르게 시작하는 웹 개발 스타터킷",
  navItems: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
