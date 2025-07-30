import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const SectionHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-12 border-custom uppercase", className)}>
      <h2 className="md:text-5xl text-3xl">{title}</h2>
    </div>
  );
};

const SectionContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-12 border-custom", className)}>{children}</div>;
};

const Section = ({
  children,
  title,
  className,
  headerClassName,
  contentClassName,
  ...props
}: {
  children: ReactNode;
  title: string;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  [key: string]: unknown;
}) => {
  return (
    <section className={cn("flex flex-col w-full", className)} {...props}>
      <SectionHeader title={title} className={headerClassName} />
      <SectionContent className={contentClassName}>{children}</SectionContent>
    </section>
  );
};
export default Section;
