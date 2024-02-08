"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const BackButton = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
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
      <ArrowLeft className="h-8 rotate-0 scale-100 transition-all" />
    </Button>
  );
};
export default BackButton;