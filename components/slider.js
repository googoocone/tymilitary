"use client"; // 반드시 추가

import { Swiper, SwiperSlide } from "swiper/react"; // 올바른 Swiper 모듈 가져오기
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper의 CSS 파일 추가

export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={40}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop={true}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[300px] "
    >
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            현역 장교의 후임 간부에 대한 모욕사건
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            의뢰인의 아들은 군 복무 중 중대장, 소대장 등에 대한 상관모욕죄로
            신고를 당하여 형사 입건 된 후 군사경찰 조사를 받았습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            군인등강제추행, 가혹행위 등 사건 집행유예 판결로 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            의뢰인의 아들은 군 복무 중 후임병에 대한 군인등강제추행, 강요,
            직무수행군인등폭행, 위력행사가혹행위, 폭행죄 등으로 신고를 당하여 군
            수사기관 수사 후 기소되어 재판으로 넘겨졌습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-xl">
            지휘관의 직권남용권리행사방해 사건 혐의없음 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            군부대 고급 지휘관이었던 의뢰인은 권한을 남용하여 부하 군인의
            권리행사를 방해하였다는 혐의로 수사를 받게 되었습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            군무이탈 사건 불기소처분(기소유예) 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            병장이었던 의뢰인은 휴가를 나갔다가 부대에 복귀하지 않아
            군무이탈죄로 군사경찰 조사를 받은 후 사건은 검찰로 넘겨졌습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            성폭법위반(통신매체이용음란) 불기소처분(기소유예) 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            의뢰인의 아들은 군 복무 중 휴대전화로 랜덤채팅을 하다가 상대방에게
            성기 사진을 보낸 사실로 고소를 당하였습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            스토킹처벌법위반 사건 혐의없음 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            군 간부인 의뢰인이 밤길에 젊은 여성 민간인을 뒤따라다니는 방법으로
            스토킹을 했다는 이유로 고소를 당한 사건입니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            군인등강제추행 불기소처분(기소유예) 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            부사관이었던 의뢰인은 같은 부대의 휘하 병사를 수 차례 성추행한
            혐의로 억울하게 고소되었습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            군인등강제추행 불송치결정(혐의없음) 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            부사관이었던 의뢰인은 같은 부대 병사를 성추행한 혐의로 고소되어
            수사를 받게 되었습니다.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[377px] h-[300px] bg-white   flex items-center justify-center px-10">
        <div className="w-full h-[200px] flex flex-col items-start justify-center gap-4 pt-5">
          <button className="px-2 py-1 bg-[#F1F1F1] text-xs font-semibold text-gray-500">
            군형사
          </button>
          <h1 className="line-clamp-2 font-semibold text-lg">
            항명 및 폭행 사건 혐의없음 방어 성공
          </h1>
          <h3 className="line-clamp-3 text-sm  mt-2  text-gray-500">
            군 장교인 의뢰인은 부서장에 대해서는 항명죄, 부서원에 대해서는
            폭행죄 혐의로 군사경찰조사를 받았습니다.
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
