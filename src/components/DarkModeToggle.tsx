// 버튼 클릭 시 <html class="dark"> 토글
// localStorage로 사용자 테마 기억
// 아이콘(react-icons)으로 직관적 표시

// 1) Tailwind의 반응형 접두사
// Tailwind는 sm:, md:, lg:, xl:, 2xl: 접두사를 활용해
// 해당 브레이크포인트 이상에서만 클래스가 적용되도록 할 수 있습니다.

// 접두사	적용 해상도 (기본값)
// sm:	640px 이상
// md:	768px 이상
// lg:	1024px 이상
// xl:	1280px 이상
// 2xl:	1536px 이상
// 예시
// <div className="w-full px-2 md:px-6 lg:px-12">...</div>
// 모바일(기본)에서는 px-2
// 태블릿(md)이상에서는 px-6
// 데스크탑(lg)이상에서는 px-12

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false;
    // 1순위: localStorage 값
    if (localStorage.theme === "dark") return true;
    if (localStorage.theme === "light") return false;
    // 2순위: OS 다크모드 설정
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = React.useState<boolean>(getInitialTheme);

  // 2. dark state가 바뀔 때마다 html의 class, localStorage 동기화
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      className="rounded-full border p-2 ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      onClick={() => setDark((prev) => !prev)}
      aria-label="다크모드 토글"
      type="button"
    >
      {dark ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
}
