"use client";

import Image from "next/image";
import Chip from "../ui/chip";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExpandButtonProps {
  expanded: boolean;
  actionFn: () => void;
}
export const ExpandButton = ({ expanded, actionFn }: ExpandButtonProps) => {
  return (
    <button
      className={cn(
        "w-8 h-8 border border-gray-950 rounded-full",
        "flex items-center justify-center",
        "absolute right-3 top-6"
      )}
      onClick={actionFn}
    >
      {expanded ? (
        <ChevronUp className="w-5 h-5 " />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>
  );
};

interface ExperienceCardHeaderProps {
  company: string;
  imageSrc: string;
  position: string;
  date: {
    from: string;
    to: string;
  };
}

export const ExperienceCardHeader = ({
  company,
  position,
  date,
  imageSrc,
}: ExperienceCardHeaderProps) => {
  return (
    <div className="flex md:flex-nowrap flex-wrap items-start gap-3 uppercase w-full">
      <Image
        width={50}
        height={50}
        className="overflow-hidden shrink-0"
        alt={`${company} logo`}
        src={imageSrc}
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between gap-3">
          <h3>{company}</h3>
          <span className="font-light line-clamp-1 mr-9">
            <span>{`${date.from} - `}</span>
            <span>{date.to}</span>
          </span>
        </div>

        <span className="font-light">{position}</span>
      </div>
    </div>
  );
};

interface ExperienceCardContentProps {
  technologies: string[];
  description: string;
  expanded?: boolean;
}
export const ExperienceCardContent = ({
  technologies,
  description,
  expanded = false,
}: ExperienceCardContentProps) => {
  return (
    <div className="flex flex-col gap-3 font-light">
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Chip key={`tech-${tech}`}>{tech}</Chip>
        ))}
      </div>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden font-light",
          expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

interface ExperienceCardProps
  extends ExperienceCardHeaderProps,
    ExperienceCardContentProps {
  expanded?: boolean;
}

const ExperienceCard = ({
  company,
  imageSrc,
  position,
  date,
  description,
  technologies,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <div
      className={cn(
        "p-6 max-w-lg w-full cursor-pointer ",
        "flex flex-col gap-6",
        "border border-gray-950 relative",
        "hover:bg-gray-100 duration-300 "
      )}
      onClick={handleClick}
    >
      <ExperienceCardHeader
        company={company}
        imageSrc={imageSrc}
        position={position}
        date={date}
      />
      <ExperienceCardContent
        technologies={technologies}
        description={description}
        expanded={isExpanded}
      />

      <ExpandButton expanded={isExpanded} actionFn={handleClick} />
    </div>
  );
};
export default ExperienceCard;
