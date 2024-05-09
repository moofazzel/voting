import Image from "next/image";
import Link from "next/link";
import dextool from "../public/dextools.svg";
import telegram from "../public/telegram.png";
import twitter from "../public/twitter.png";
import Biden from "./components/Biden";
import Trump from "./components/Trump";
import VoteDetails from "./components/VoteDetails";

import bg from "../public/bg.jpg";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" h-screen "
    >
      <div className=" backdrop-brightness-50 h-screen px-5 pb-20">
        <VoteDetails />

        <div className="flex gap-3 sm:gap-5 md:gap-10 justify-center items-center">
          <Trump />
          <Biden />
        </div>

        <div className="flex justify-center gap-5 mt-10 max-w-[650px] mx-auto px-5 py-6 rounded-md bg-[#ffffffd2]  ">
          <Link href="tglink">
            <Image
              className="w-[50px] h-[50px] "
              src={telegram}
              alt="telegram icon"
            />
          </Link>
          <Link href="ttlink">
            <Image
              className="w-[50px] h-[50px] "
              src={twitter}
              alt="twitter icon"
            />
          </Link>
          <Link href="chartlink">
            <Image
              className="w-[50px] h-[50px] "
              src={dextool}
              alt="dextool icon"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
