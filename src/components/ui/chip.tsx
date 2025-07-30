import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "border border-gray-950 rounded-full w-fit",
        "flex items-center text-sm px-3"
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
