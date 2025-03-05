"use client"; // 반드시 추가

import { Swiper, SwiperSlide } from "swiper/react"; // 올바른 Swiper 모듈 가져오기
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper의 CSS 파일 추가
import Image from "next/image";
import Link from "next/link";

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
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[250px] "
    >
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0 relative">
        <Link
          href="https://www.youtube.com/watch?v=fJyIQZpl8f0"
          target="_blank"
        >
          <Image src="/yt1.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0 relative">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=RpYesk31nn4"
        >
          <Image src="/yt2.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=j_vtqNjR0Mk"
        >
          <Image src="/yt3.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=8qin3KVB6Ak"
        >
          <Image src="/yt4.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=sJmyOk4kmyE"
        >
          <Image src="/yt5.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=ypaFbHY1VC8"
        >
          <Image src="/yt6.jpg" fill></Image>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="w-[444px] bg-black h-[250px]  flex items-center justify-center shrink-0">
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=-qupBp8cDKo"
        >
          <Image src="/yt7.jpg" fill></Image>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
