import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectHeaderCardProps {
  imageSrc: string;
  title: string;
}

export const ProjectHeaderCard = ({
  imageSrc,
  title,
}: ProjectHeaderCardProps) => {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <Image
        width={50}
        height={50}
        className="rounded-full border border-gray-950 object-cover overflow-hidden"
        alt={`image ${title}`}
        src={imageSrc}
      />
    </div>
  );
};

interface ProjectContentProps {
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
}

export const ProjectContent = ({
  title,
  subtitle,
  cta,
}: ProjectContentProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <Link
          href={cta.link}
          target="_blank"
          className="font-light underline line-clamp-1"
        >
          {subtitle}
        </Link>
        <h3 className="uppercase line-clamp-1 font-medium">{title}</h3>
      </div>
      <Link
        href={cta.link}
        target="_blank"
        className={cn(
          "w-full border border-gray-950 p-3 uppercase hover:bg-indigo-700 duration-300",
          "flex justify-center items-center gap-1.5 hover:text-white"
        )}
      >
        {cta.text}
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

interface ProjectCardProps
  extends ProjectHeaderCardProps,
    ProjectContentProps {}

export const ProjectCard = ({
  title,
  subtitle,
  imageSrc,
  cta,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col max-w-xs">
      <ProjectHeaderCard title={title} imageSrc={imageSrc} />
      <ProjectContent title={title} subtitle={subtitle} cta={cta} />
    </div>
  );
};
