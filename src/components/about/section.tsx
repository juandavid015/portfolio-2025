import { useTranslations } from "next-intl";
import Section from "../section";
import { ReactNode } from "react";
import { Eclipse, LucideIcon, Mail, MapPin, Waypoints } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutItemProps {
  title: string;
  content: string;
  icon: LucideIcon;
}

export const AboutItem = ({ title, content, icon }: AboutItemProps) => {
  const Icon = icon;
  return (
    <div className="flex py-1.5 px-3 border border-gray-950 w-full justify-between items-center gap-3">
      <div className="flex flex-col">
        <span className="uppercase font-medium">{title}</span>
        <span className="font-light">{content}</span>
      </div>

      <div className="border border-gray-950 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

interface AboutDescriptionProps {
  title:string;
  description: ReactNode[];
}

export const AboutDescription = ({
  title,
  description,
}: AboutDescriptionProps) => {
  return (
    <div className={cn("max-w-full border border-gray-950 flex flex-col relative w-full",
      "before:h-8 before:w-6 before:absolute before:-top-4 before:-right-0.5 before:bg-indigo-700"
    )}>
      <div className=" w-full font-medium uppercase p-3 border-b border-gray-950">
        {title}
      </div>
      <div className="flex flex-col gap-3 p-3">
        {description.map((desc, index) => (
          <p key={index} className="font-light">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const t = useTranslations("about");

  const description = [
    t.rich("description.paragraph1", {
      strong: (chunks) => <strong>{chunks}</strong>,
    }),
    t.rich("description.paragraph2", {
      strong: (chunks) => <strong>{chunks}</strong>,
    }),
  ];

  return (
    <Section
      title={t("title")}
      className={className}
      contentClassName="flex gap-6 w-full"
      id="about"
    >
      <AboutDescription description={description} title={t("description.title")} />
      <div className="flex flex-col gap-6 w-full">
        <AboutItem
          title={t("description.other.status.title")}
          content={t("description.other.status.content")}
          icon={Waypoints}
        />
        <AboutItem
          title={t("description.other.interest.title")}
          content={t("description.other.interest.content")}
          icon={Eclipse}
        />
        <AboutItem
          title={t("description.other.location.title")}
          content={t("description.other.location.content")}
          icon={MapPin}
        />
        <AboutItem
          title={t("description.other.email.title")}
          content={t("description.other.email.content")}
          icon={Mail}
        />
      </div>
    </Section>
  );
};

export default AboutSection;
