import { useTranslations } from "next-intl";
import Section from "../section";
import data from "@/data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProjectCard } from "./card";

interface ProjectsSectionProps {
  className?: string;
}


const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const t = useTranslations("projects");
  const project = data.projects;

  return (
    <Section title={t("title")} className={className} id="projects">
      <Carousel className="w-full">
        <CarouselContent>
          {project.map((project) => {
            return (
              <CarouselItem
                key={`exp-${project.title}`}
                className="w-fit max-w-sm w-full"
              >
                <ProjectCard
                  title={project.title}
                  imageSrc={project.imageSrc}
                  subtitle={project.subtitle}
                  cta={project.CTA}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default ProjectsSection;
