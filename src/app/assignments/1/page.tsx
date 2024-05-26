import Header from "@/components/header";

export default function Assignment1() {
  const product = {
    imageSrc: "https://gdimg.gmarket.co.kr/2004408943/still/300?ver=1712543662",
    title: "(15%쿠폰)탱글탱글 대추방울토마토 2kg 4번 소과",
    price: 13900,
  };

  return (
    <>
      <Header title={"상품 목록 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5 scrollbar-hide">
        <div className="w-full gap-4 grid grid-cols-2">
          <div className="rounded-md bg-white w-52 h-72 border p-3 gap-1 flex flex-col">
            {/* 아래 코드를 완성해 주세요. 태그나 className은 수정하지 않아도 됩니다. */}
            <img src="" className="rounded-md w-full aspect-square" />
            <div className="h-12 max-h-12 overflow-hidden">상품명</div>
            <div className="font-bold">0원</div>
            {/* --- 윗 줄까지 --- */}
          </div>
        </div>
      </div>
    </>
  );
}

function BlankProductImage() {
  return (
    <div className="w-full aspect-square rounded-md bg-stone-300 text-white flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </div>
  );
}
