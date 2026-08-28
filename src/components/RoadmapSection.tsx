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

      {/* Upcoming Event */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="mb-4 flex items-center gap-2">
          <Badge className="rounded-full bg-rose-100 px-3 py-1 text-xs font-body text-rose-700">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            Upcoming Event
          </Badge>
        </div>
        <Card className="overflow-hidden rounded-3xl border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
            <div className="p-6 lg:p-8">
              <CardHeader className="p-0 pb-4">
                <CardDescription className="font-body text-sm font-medium text-primary">
                  {upcomingEvent.host}
                </CardDescription>
                <CardTitle className="font-display text-xl text-foreground sm:text-2xl">
                  {upcomingEvent.title}
                </CardTitle>
              </CardHeader>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {upcomingEvent.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={upcomingEvent.url} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-xl font-body">
                    Register on event page <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <CardContent className="flex flex-col justify-center gap-3 border-t border-border/60 bg-secondary/30 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Dates</p>
                  <p className="font-body text-sm font-medium text-foreground">{upcomingEvent.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Time</p>
                  <p className="font-body text-sm font-medium text-foreground">{upcomingEvent.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-body text-sm font-medium text-foreground">{upcomingEvent.location}</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>

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
