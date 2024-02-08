import BackButton from "@/components/BackButton";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";

const regex = new RegExp(`(\/courses)?\/`);

const Header = () => {
  return (
    <div className="flex place-content-between items-center flex-row p-5 border-b-2 border-primary drop-shadow-md">
      <div className="min-w-12 max-w-[10%]">
        <div className="flex flex-row items-center">
          <BackButton />
          <ModeToggle />
        </div>
      </div>
      <div>
        <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
      </div>
    </div>
  );
};
export default Header;
