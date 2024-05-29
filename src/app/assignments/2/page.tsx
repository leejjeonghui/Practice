import Header from "@/components/header";
import { profile } from "console";
import Image from "next/image";

interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  const Person: Profile = {
    imageSrc: "/마석도.png",
    name: "마동석",
    age: 50,
    nationality: "한국",
    height: 179,
    weight: 120,
    job: "배우",
    famousLines: ["응 그래 아직 솔로야", "위험해!!!너 말이야"],
  };
  return (
    <>
      <Header title={"프로필 카드 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        <ProfileCard
          imageSrc={Person.imageSrc}
          name={Person.name}
          age={Person.age}
          nationality={Person.nationality}
          height={Person.height}
          weight={Person.weight}
          job={Person.job}
          famousLines={Person.famousLines}
        ></ProfileCard>
      </div>
    </>
  );
}

function ProfileCard(props: Profile) {
  return (
    <div className="p-5 bg-white border rounded-md mx-16">
      <div className="w-full flex justify-center pb-5">
        <Image
          className="rounded-full size-40"
          src={props.imageSrc}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="text-xs text-stone-400">이름</p>
          <div>{props.name}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">나이</p>
          <div>{props.age}세</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">국적</p>
          <div>{props.nationality}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">키/몸무게</p>
          <div>
            {props.height}cm / {props.weight}kg
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">직업</p>
          <div>{props.job}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">명대사</p>
          {props.famousLines.map((line, index) => (
            <div key={`${props.name}FamouseLine${index}`}>
              &quot;{line}&quot;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
