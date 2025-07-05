// 주요 Tailwind 클래스 해설

// rounded-2xl overflow-hidden shadow: 카드 스타일, 코너 둥글게, 그림자
// hover:shadow-lg transition: 마우스 오버 시 부드러운 그림자
// bg-white dark:bg-gray-900: 라이트/다크 배경
// object-cover: 이미지 꽉 채우기

import { MdStar } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

type ListingCardProps = {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
};

export default function ListingCard({
  image,
  title,
  location,
  price,
  rating,
}: ListingCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white dark:bg-gray-900 transition">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <span className="text-pink-600 dark:text-pink-400 font-bold">
            ${price} /박
          </span>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          {location}
        </div>
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <MdStar className="w-4 h-4" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
}
