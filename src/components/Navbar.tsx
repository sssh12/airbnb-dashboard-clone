// 주요 Tailwind 클래스 해설

// w-full h-16: 전체 너비, 높이 64px
// flex items-center justify-between: 수평 배치, 양쪽 정렬
// px-6: 좌우 패딩
// bg-white dark:bg-gray-900: 다크모드 지원 배경색
// shadow-md: 그림자 효과
// gap-4: 아이템 간격
// rounded-full, border: 원형 테두리
// hover:bg-gray-100, hover:shadow: 호버(마우스 오버) 시 효과
// dark: 접두사: 다크모드 대응(필수)

import { MdLanguage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-900 shadow-md">
      {/* 로고 */}
      <div className="text-xl font-bold text-pink-600 dark:text-pink-400">
        Airbnb
      </div>
      {/* 네비게이션 우측 */}
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <button className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 text-sm">
          호스트 되기
        </button>
        {/* 언어 선택 */}
        <button className="rounded-full border p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
          <MdLanguage className="w-5 h-5" />
        </button>
        {/* 메뉴 & 유저 */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border hover:shadow cursor-pointer">
          <FiMenu className="w-6 h-6" />
          <FaUserCircle className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </nav>
  );
}
