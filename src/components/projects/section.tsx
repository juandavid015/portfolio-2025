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
  const project = data.projects.map((project, idx) => {
    return {
      ...project,
      CTA:
        idx === 0
          ? {
              text: t("items.first.CTA.text"),
              link: t("items.first.CTA.link"),
            }
          : idx === 1
          ? {
              text: t("items.second.CTA.text"),
              link: t("items.second.CTA.link"),
            }
          : idx === 1
          ? {
              text: t("items.third.CTA.text"),
              link: t("items.third.CTA.link"),
            }
          : {
              text: "",
              link: "",
            },
      subtitle:
        idx === 0
          ? t("items.first.subtitle")
          : idx === 1
          ? t("items.second.subtitle")
          : idx === 2
          ? t("items.third.subtitle")
          : "",
    };
  });

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
