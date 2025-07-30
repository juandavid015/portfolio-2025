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
  const experiences = data.experiences;

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
