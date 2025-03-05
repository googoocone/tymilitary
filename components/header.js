import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen h-[50px] sm:h-[100px] flex items-center justify-between px-2 sm:px-40 bg-black/90">
      <div className="w-[120px] h-[25px] sm:w-[240px] sm:h-[50px] relative">
        <Link href="/">
          <Image src="/logo.png" fill></Image>
        </Link>
      </div>
      <div className="px-2 py-1.5 sm:px-4 sm:py-3  text-xs sm:text-xl rounded-full border border-gray-50 text-white">
        070-4138-0508
      </div>
    </div>
  );
}
