import { useTranslations } from "next-intl";
import Section from "../section";
import ExperienceCard from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import data from "@/data.json";

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  const t = useTranslations("experience");
  const experiences = data.experiences.map((exp, idx) => {
    return {
      ...exp,
      date:
        idx === 0
          ? {
              from: t("items.first.time.start"),
              to: t("items.first.time.end"),
            }
          : idx === 1
          ? {
              from: t("items.second.time.start"),
              to: t("items.second.time.end"),
            }
          : idx === 2
          ? {
              from: t("items.third.time.start"),
              to: t("items.third.time.end"),
            }
          : {
              from: "",
              to: "",
            },
      position:
        idx === 0
          ? t("items.first.position")
          : idx === 1
          ? t("items.second.position")
          : idx === 2
          ? t("items.third.position")
          : "",
      description:
        idx === 0
          ? t("items.first.description")
          : idx === 1
          ? t("items.second.description")
          : idx === 2
          ? t("items.third.description")
          : "",
    };
  });

  return (
    <Section title={t("title")} className={className} id={"experience"}>
      <Carousel className="w-full">
        <CarouselContent>
          {experiences.map((experience) => {
            return (
              <CarouselItem
                key={`exp-${experience.company}`}
                className="w-fit max-w-lg w-full"
              >
                <ExperienceCard
                  company={experience.company}
                  imageSrc={experience.imageSrc}
                  position={experience.position}
                  date={experience.date}
                  technologies={experience.technologies}
                  description={experience.description}
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
export default ExperienceSection;
