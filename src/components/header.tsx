import { useLocale, useTranslations } from "next-intl";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";
import { FileCode2, Github, Linkedin } from "lucide-react";

import SocialLink from "./social-link";

const Header = () => {
  const t = useTranslations("header");
  const locale = useLocale();

  const isSpanishVersion = locale.includes("es");
  const CVLink = isSpanishVersion
    ? "https://drive.google.com/file/d/1eOX3SN1TgJiMnKHYS7bEOdeGlnEevmge/view?usp=sharing"
    : "https://drive.google.com/file/d/1Jcmuq9wtp1Tg3Mg1idQA7Ke8nto_fw3Z/view?usp=sharing";

  return (
    <header className={cn("w-full uppercase", "border-custom")}>
      <Navbar />
      <div className="p-16 flex flex-col gap-6">
        <h1 className="inline-flex flex-col gap-3">
          <span className="md:text-7xl text-3xl">{t("title")}</span>
          <span className="md:text-6xl text-2xl text-indigo-700">
            {t("subtitle")}
          </span>
        </h1>
        <p>{t("description")}</p>

        {/* Socials */}
        <div className="flex gap-3 justify-end">
          <SocialLink
            url="https://github.com/juandavid015"
            icon={Github}
            title="Github"
          />
          <SocialLink
            url="https://www.linkedin.com/in/juan-dgr/"
            icon={Linkedin}
            title="LinkedIn"
          />
          <SocialLink
            url={CVLink}
            icon={FileCode2}
            title="Download CV"
            download
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
