import { useRef } from "react";
import terrierLogo from "@/assets/terrier-tech-logo.png";
import HeroSection from "@/components/HeroSection";
import RoadmapSection from "@/components/RoadmapSection";
import ResourcesSection from "@/components/ResourcesSection";
import QuickGuidesSection from "@/components/QuickGuidesSection";
import UniversitiesSection from "@/components/UniversitiesSection";
import NewsSourcesSection from "@/components/NewsSourcesSection";

export default function Index() {
  const roadmapRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection
        onScrollToRoadmap={() => scrollTo(roadmapRef)}
        onScrollToResources={() => scrollTo(resourcesRef)}
      />
      <RoadmapSection sectionRef={roadmapRef} />
      <QuickGuidesSection />
      <UniversitiesSection />
      <ResourcesSection sectionRef={resourcesRef} />
      <NewsSourcesSection />

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center gap-3">
            <img src={terrierLogo} alt="Terrier Tech logo" className="h-10 w-10 object-contain" />
            <p className="text-sm text-muted-foreground font-body">
              Terrier Tech · Innovation for the Pack · Built for first-time founders
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
