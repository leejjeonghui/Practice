"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Assignment3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title={"카운터 만들기"} hasBack={true} />
      <div className="flex flex-col items-center gap-14 h-screen justify-center pb-32">
        <div className="text-3xl font-semibold">Counter</div>
        <div className="text-8xl">{count}</div>
        <button className="bg-blue-500 text-white text-lg w-20 rounded-lg active:scale-95">
          +1
        </button>
      </div>
    </div>
  );
}
