// 주요 Tailwind 레이아웃 클래스 해설
// min-h-screen : 전체 화면 높이 유지 (스크롤 시에도 하단이 잘리지 않음)
// flex flex-col : 수직(세로) 정렬, 상단에 Navbar, 아래에 Content
// flex-1 : 남은 영역을 꽉 채움
// bg-gray-50 dark:bg-gray-950 : 라이트/다크 테마 배경
// p-6 : 메인 컨텐츠 영역 여백

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
