"use client";
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Regex } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const regex = new RegExp(`(\/courses)?\/`);

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="flex place-content-between items-center flex-row p-5 border-b-2 border-primary drop-shadow-md">
      <div className="min-w-12 max-w-[10%]">
        <div className="flex flex-row items-center">
          <Button
            variant="ghost"
            size="icon"
            style={{
              display:
                pathName.endsWith("courses/") || pathName.endsWith("courses")
                  ? "none"
                  : "block",
            }}
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="h-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </Button>

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
