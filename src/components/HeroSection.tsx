import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Compass } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/boston-skyline.jpg";

const stats = [
  ["8+", "Curated Resources"],
  ["6", "Startup Steps"],
  ["4", "Featured Hubs"],
  ["Beginner", "Friendly Design"],
];

const quickActions = [
  "Describe the customer problem in plain language",
  "Talk to 5 potential users before building",
  "Use Boston programs to find mentors, funding, and community",
];

interface HeroSectionProps {
  onScrollToRoadmap: () => void;
  onScrollToResources: () => void;
}

export default function HeroSection({ onScrollToRoadmap, onScrollToResources }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/90 to-card/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div>
            <Badge className="mb-5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/15">
              Boston Founder Resource Hub
            </Badge>
            <h1 className="max-w-3xl font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              A simple, friendly guide to launching a tech startup in Boston.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground font-body">
              Built for subject matter experts, first-time founders, and people with a great idea
              but no startup playbook. Explore beginner-friendly guides, Boston resources, funding
              options, and next steps — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={onScrollToRoadmap} size="lg" className="rounded-2xl px-8 font-body font-semibold">
                Start Here
              </Button>
              <Button onClick={onScrollToResources} variant="outline" size="lg" className="rounded-2xl px-8 font-body font-semibold">
                Browse Resources
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4">
                  <div className="text-2xl font-bold text-primary font-body">{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground font-body">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="rounded-3xl shadow-lg border-border/60 backdrop-blur-sm bg-card/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-display text-foreground">
                  <Compass className="h-6 w-6 text-accent" /> Founder Quick Start
                </CardTitle>
                <CardDescription className="font-body">
                  Not sure where to begin? Start with these three actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm leading-6 text-foreground font-body">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
