import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="w-full border-custom font-light p-12 uppercase font-medium">
      <span>
        {`${t("content.part1")} `}
        <Link
          href={"https://github.com/juandavid015"}
          target="_blank"
          className="text-indigo-700"
        >
          {`${t("content.tag")} `}
        </Link>
        {t("content.part2")}
      </span>
    </footer>
  );
};

export default Footer;
