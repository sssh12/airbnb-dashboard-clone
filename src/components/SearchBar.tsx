// 주요 Tailwind 클래스 해설

// flex items-center gap-3: 수평 배치, 간격
// bg-white dark:bg-gray-900 border rounded-full: 테두리, 둥근 입력창, 테마 지원
// shadow-sm: 부드러운 그림자
// outline-none: 입력창 포커스 시 외곽선 제거

import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <form className="flex items-center gap-3 bg-white dark:bg-gray-900 border rounded-full px-4 py-2 shadow-sm">
      <input
        className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        placeholder="어디로 여행가세요?"
      />
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-4 py-2 font-semibold transition flex items-center gap-1"
      >
        <FiSearch className="w-4 h-4" />
        검색
      </button>
    </form>
  );
}
