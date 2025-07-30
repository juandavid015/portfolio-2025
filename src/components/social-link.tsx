import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
  url: string;
  icon: LucideIcon;
  title: string;
  [key: string]: unknown;
}
const SocialLink = ({ url, icon, title, ...props }: SocialLinkProps) => {
  const Icon = icon;
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={url}
          target="_blank"
          className={cn(
            "p-1.5 rounded-full bg-black w-8 h-8",
            "hover:bg-indigo-700 duration-300",
            "flex jusitify-center items-center"
          )}
          {...props}
        >
          <Icon className="w-5 w-5 text-white" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};

export default SocialLink;
