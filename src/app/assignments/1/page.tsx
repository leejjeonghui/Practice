import Header from "@/components/header";

function 상품(props:{imageSrc:string,title:string,price:number}){
  return(
    <div className="rounded-md bg-white w-52 h-72 border p-3 gap-1 flex flex-col">
      {props.imageSrc!=""?<img src={props.imageSrc}></img>:<BlankProductImage/>}
    <div className="h-12 max-h-12 overflow-hidden">{props.title}</div>
    <div className="font-bold">{props.price}</div>
    {/* --- 윗 줄까지 --- */}
  </div>
  )
 }

export default function Assignment1() {
  const product = {
    imageSrc: "",
    title: "(15%쿠폰)탱글탱글 대추방울토마토 2kg 4번 소과",
    price: 13900,
  };

  const products = [
    {imageSrc: "",
    title: "(15%쿠폰)탱글탱글 대추방울토마토 2kg 4번 소과",
    price: 13900},
    {imageSrc: "https://src.hidoc.co.kr/image/lib/2021/6/24/1624517344477_0.jpg",
    title: "복숭아",
    price: 15000},
    {
    imageSrc: "https://www.nongmin.com/-/raw/srv-nongmin/data2/content/image/2022/02/13/.cache/512/20220213191115.jpg",
    title: "딸기",
    price: 25000
    }
  ]

  // function 상품을만드는함수() {
    
  //   return <상품></상품>
  // }
 // 
 //

  return (
    <>
      <Header title={"상품 목록 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5 scrollbar-hide">
        <div className="w-full gap-4 grid grid-cols-2">
         {/* {products.map(상품을만드는함수)} */}
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
