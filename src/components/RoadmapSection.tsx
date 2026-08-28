import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Users, ClipboardList, MapPin, HandCoins, Rocket, CalendarDays, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const upcomingEvent = {
  title: "Student Study Group: AI and the Future of Entrepreneurial Opportunity",
  host: "Harvard Bloomberg Center for Cities · Led by Natalie Cofield",
  date: "Sept 23, Oct 6, & Nov 3, 2026",
  time: "4:00–6:30 p.m.",
  location: "Bloomberg Center for Cities, Taubman Third Floor, Harvard Kennedy School",
  description:
    "How will AI reshape entrepreneurial opportunity across cities and regions? This study group examines AI not as a tool, but as a structural economic force influencing labor demand, firm competitiveness, and entrepreneurial access across local and regional economies.",
  url: "https://www.cities.harvard.edu/events/student-study-group-ai-and-the-future-of-entrepreneurial-opportunity-implications-for-cities-and-regions/",
};

const roadmap = [
  {
    step: "Step 1",
    title: "Start with your idea",
    description: "Clarify the problem you want to solve, who has it, and why your solution is different. This section is designed for first-time founders and subject matter experts.",
    icon: Lightbulb,
  },
  {
    step: "Step 2",
    title: "Validate with real users",
    description: "Talk to potential customers, test demand, and gather early feedback before spending heavily on product development.",
    icon: Users,
  },
  {
    step: "Step 3",
    title: "Build your startup basics",
    description: "Learn the essentials: company formation, legal setup, pitch materials, financial model, and founder roles.",
    icon: ClipboardList,
  },
  {
    step: "Step 4",
    title: "Find support in Boston",
    description: "Use accelerators, mentors, coworking spaces, universities, and founder communities to move faster with less guesswork.",
    icon: MapPin,
  },
  {
    step: "Step 5",
    title: "Explore funding paths",
    description: "Compare grants, non-dilutive programs, angel funding, venture capital, and public resources in Massachusetts.",
    icon: HandCoins,
  },
  {
    step: "Step 6",
    title: "Launch and grow",
    description: "Prepare for pilots, partnerships, hiring, and storytelling so your startup can gain traction and scale.",
    icon: Rocket,
  },
];

interface RoadmapSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function RoadmapSection({ sectionRef }: RoadmapSectionProps) {
  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Rocket className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-3xl font-display text-foreground">Your startup roadmap</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {roadmap.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="group rounded-3xl border-border/60 shadow-sm transition-shadow hover:shadow-md h-full">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <Badge variant="outline" className="w-fit text-xs font-body font-medium">
                    {item.step}
                  </Badge>
                  <CardTitle className="text-xl font-display text-foreground">{item.title}</CardTitle>
                  <CardDescription className="font-body leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
