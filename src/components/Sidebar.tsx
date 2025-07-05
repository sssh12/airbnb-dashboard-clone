// 주요 Tailwind 클래스 해설

// w-56: 고정 폭(224px)
// min-h-screen: 전체 화면 높이
// border-r: 오른쪽 테두리, 다크모드용 색상
// hidden md:block: 모바일에서는 숨김, 데스크탑에서 표시
// flex flex-col gap-2: 세로 배치, 메뉴 간격
// hover:bg-gray-100, dark:hover:bg-gray-800: 호버 효과(라이트/다크 모두)

import { MdDashboard, MdStar, MdInbox, MdSettings } from "react-icons/md";

const menus = [
  { icon: <MdDashboard className="w-5 h-5" />, label: "대시보드" },
  { icon: <MdStar className="w-5 h-5" />, label: "즐겨찾기" },
  { icon: <MdInbox className="w-5 h-5" />, label: "메시지" },
  { icon: <MdSettings className="w-5 h-5" />, label: "설정" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-white dark:bg-gray-950 border-r dark:border-gray-800 px-4 py-6 hidden md:block">
      <nav className="flex flex-col gap-2">
        {menus.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-left"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
