import AboutSection from "@/components/about/section";
import ExperienceSection from "@/components/experience/section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectsSection from "@/components/projects/section";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center sm:items-start">
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
