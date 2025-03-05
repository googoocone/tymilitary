import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screnn h-[100px] flex items-center justify-between px-40 bg-black/90">
      <Link href="/">
        <Image src="/logo.png" width={200} height={100}></Image>
      </Link>
      <div className="px-4 py-3 rounded-full border border-gray-50 text-white">
        070-4138-0508
      </div>
    </div>
  );
}
