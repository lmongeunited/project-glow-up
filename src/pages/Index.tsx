import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import RoadmapSection from "@/components/RoadmapSection";
import ResourcesSection from "@/components/ResourcesSection";
import QuickGuidesSection from "@/components/QuickGuidesSection";
import CtaSection from "@/components/CtaSection";

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
      <ResourcesSection sectionRef={resourcesRef} />
      <CtaSection />

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <p className="text-center text-sm text-muted-foreground font-body">
            Boston Founder Resource Hub · Built for first-time founders and subject matter experts
          </p>
        </div>
      </footer>
    </div>
  );
}
