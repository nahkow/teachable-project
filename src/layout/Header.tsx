"use client";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex place-content-between items-center flex-row p-5 border-b-2 border-primary drop-shadow-md">
      <div className="min-w-12 max-w-[10%]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={70}
          height={70}
          priority
        />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
export default Header;
