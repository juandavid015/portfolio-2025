import Image from "next/image";
import Chip from "../ui/chip";
import { cn } from "@/lib/utils";

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
    <div className="flex items-start gap-3 uppercase w-full">
      <Image
        width={50}
        height={50}
        className="overflow-hidden"
        alt={`${company} logo`}
        src={imageSrc}
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between gap-3">
          <h3>{company}</h3>
          <span className="font-light">
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
}
export const ExperienceCardContent = ({
  technologies,
  description,
}: ExperienceCardContentProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Chip key={`tech-${tech}`}>{tech}</Chip>
        ))}
      </div>
      <p>{description}</p>
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
  expanded = false,
}: ExperienceCardProps) => {
  return (
    <div
      className={cn(
        "p-6 max-w-lg w-full",
        "flex flex-col gap-6",
        "border border-gray-950"
      )}
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
      />
    </div>
  );
};
export default ExperienceCard;
