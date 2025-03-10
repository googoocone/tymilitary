import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex ">
        <div className="flex w-full flex-col relative">
          <Header className="fixed top-0 z-50 bg-white shadow-md"></Header>
          <div className="flex  flex-col ">{children}</div>
        </div>
      </body>
    </html>
  );
}
