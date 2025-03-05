import Image from "next/image";
import Swiper from "@/components/slider";
import YtSwiper from "@/components/youtubeslider";

export default function Home() {
  return (
    <main
      className="relative h-screen bg-cover bg-center"
      // 배경 이미지 경로를 실제 파일로 변경
    >
      <div
        style={{ backgroundImage: "url('/main-bg.png')" }}
        className=" inset-0 h-full flex flex-col gap-6 items-center justify-center text-white"
      >
        <h3 className="text-2xl">
          <span className="font-semibold">군판사 출신</span> 김태용 대표변호사
        </h3>
        <h1 className="text-6xl font-bold mb-4">법무법인 에이파트</h1>
        <p className="text-center  text-xl">
          군형사 사건은, 군 형사법을 가장 잘 아는 군판사 출신의
          <br /> 대표변호사에게 맡겨야합니다.
        </p>
        <div className="h-[100px]"></div>
      </div>
      <div className=" w-full sm:w-[1000px] h-full  sm:h-[948px] relative mx-auto my-20">
        <Image src="/section2.png" fill objectFit="cover"></Image>
      </div>
      <div
        style={{ backgroundImage: "url('/section3.png')", objectFit: "cover" }}
        className="w-full h-[800px] flex flex-col items-center justify-center"
      >
        <div className="w-full h-[500px] px-[200px]">
          <div className="text-5xl font-semibold text-white mb-10">
            군형사 승소사례
          </div>
          <div className="text-gray-300 mb-10">
            법무법인 에이파트 김태용 대표변호사는 군 사건에 대한 다양한 경험으로{" "}
            <br /> 최선의 결과를 도출합니다.
          </div>
          <Swiper></Swiper>
        </div>
      </div>
      <div className="w-full h-[200px] text-center mt-20 text-4xl font-semibold">
        <div>김태용변호사가 알려주는 법률지식</div>
        <div className="mt-5 flex items-center justify-center">
          <Image src="/yt.png" width={50} height={50}></Image>YOUTUBE에서
          만나보세요{" "}
        </div>
      </div>
      <YtSwiper></YtSwiper>
      <div className="w-full h-[80px]"></div>
      <div
        style={{ backgroundImage: "url('/last.png')" }}
        className="w-full h-[600px] flex items-center justify-center gap-10"
      >
        <Image src="/map.svg" width={700} height={700}></Image>
        <div className="flex flex-col gap-6 ">
          <div className="text-white font-semibold text-4xl ">
            법무법인 에이파트 상담
          </div>
          <div className=" w-full flex gap-10 items-center justify-start">
            <div className="text-lg font-semibold text-white">유선상담</div>
            <div className="text-4xl font-semibold text-[#A5A4A3]">
              070-4138-0508
            </div>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <div className="text-lg font-semibold text-white">오시는길</div>
            <div className="text-lg  text-[#A5A4A3]">
              경기도 수원시 영통구 광교중앙로 248번길 7-2 C동 3층 317, 318호
            </div>
          </div>
          <div className="flex gap-10 items-center justify-start">
            <div className="text-lg font-semibold text-white">대중교통</div>
            <div className="text-lg  text-[#A5A4A3]">
              신분당선 상현역 2번출구 도보 10분
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center gap-2 text-white px-20 py-10">
        <div>
          <span className="font-semibold">대표 변호사 :</span> 김태용 |
        </div>
        <div>
          {" "}
          <span className="font-semibold">광고책임 변호사 :</span> 김태용 |
        </div>
        <div>
          {" "}
          <span className="font-semibold">대표 전화 :</span> 070-4138-0508 |
        </div>
        <div>
          {" "}
          <span className="font-semibold">사업자 등록번호 :</span> 247-85-02735
          |
        </div>
      </div>
    </main>
  );
}
