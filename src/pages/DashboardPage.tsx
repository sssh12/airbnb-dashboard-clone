// 주요 Tailwind 레이아웃 클래스 해설 (본문)
// max-w-5xl mx-auto : 최대 너비 제한, 중앙 정렬
// flex flex-col gap-8 : 세로로 배치, 큰 간격
// grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 :
//  그리드 레이아웃
//  모바일(1열) ~ 데스크탑(3열) 반응형
//  gap-6 : 카드 사이 간격

import DashboardLayout from "../layouts/DashboardLayout";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";

const mockListings = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "감성 숙소 #1",
    location: "서울, 대한민국",
    price: 120000,
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "바다 전망 숙소",
    location: "부산, 대한민국",
    price: 95000,
    rating: 4.6,
  },
  {
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    title: "산속 힐링 하우스",
    location: "강원도, 대한민국",
    price: 83000,
    rating: 4.9,
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section className="max-w-5xl mx-auto flex flex-col gap-8">
        <SearchBar />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {mockListings.map((item) => (
            <ListingCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
