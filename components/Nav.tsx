import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSun } from "react-icons/hi";
import { TbDeviceNintendo } from "react-icons/tb";
import Button from "./ui/button";

const Nav = () => {
  return (
    <div className="bg-card h-[3.75rem] flex justify-between items-center px-5 sticky top-0 lg:z-30 z-0">
      <Link href={`/`} className="cursor pointer">
        <Image
          src={"/foodNetwork.svg"}
          alt="Food Network Logo"
          width={80}
          height={80}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <div className="hidden md:flex">
        <Input type="text" className=" h-10 w-[24rem]" />
        <Button cl="absolute mt-1 ml-[21.7rem] text-[#ff6e3a] bg-[#e6542735] rounded-md">
          <BiSearch />
        </Button>
      </div>
      <div className="hidden md:flex gap-6">
        <Button cl="text-[#ff6e3a] bg-[#e6542735]">
          <HiSun />
        </Button>
        <Button cl="text-[#101011c5] bg-[#e6542735]">
          <TbDeviceNintendo />
        </Button>
        <Button cl="text-[#101011c5] bg-[#1010101A]">
          <GiHamburgerMenu />
        </Button>
      </div>
      <div className="flex md:hidden gap-4">
        <Button cl="text-[#ff6e3a] bg-[#e6542735]">
          <BiSearch />
        </Button>
        <Button cl="text-[#101011c5] bg-[#1010101A]">
          <GiHamburgerMenu />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
