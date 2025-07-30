import { useTranslations } from "next-intl";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header className={cn("w-full uppercase", "border-custom")}>
      <Navbar />
      <div className="p-16 flex flex-col gap-6">
        <h1 className="inline-flex flex-col gap-3">
          <span className="md:text-7xl text-3xl">{t("title")}</span>
          <span className="md:text-6xl text-2xl text-indigo-700">{t("subtitle")}</span>
        </h1>
        <p>{t("description")}</p>
      </div>
    </header>
  );
};

export default Header;
