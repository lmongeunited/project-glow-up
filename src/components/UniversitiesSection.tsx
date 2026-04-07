import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import terrierLogo from "@/assets/terrier-tech-logo-lg.png";

const universities = [
  {
    name: "MIT Martin Trust Center",
    university: "Massachusetts Institute of Technology",
    description:
      "One of the world's top entrepreneurship centers, offering courses, accelerators, and a vibrant founder community. Home to the MIT $100K competition.",
    url: "https://entrepreneurship.mit.edu/",
    programs: ["$100K Competition", "delta v Accelerator", "Venture Mentoring Service"],
  },
  {
    name: "Harvard Innovation Labs (i-lab)",
    university: "Harvard University",
    description:
      "A cross-campus hub for entrepreneurship offering programming, mentorship, and co-working space for Harvard students, alumni, and faculty.",
    url: "https://innovationlabs.harvard.edu/",
    programs: ["Venture Incubation Program", "President's Innovation Challenge", "Expert-in-Residence"],
  },
  {
    name: "BUild Lab",
    university: "Boston University",
    description:
      "BU's flagship innovation space supporting student and alumni founders with mentorship, workshops, summer accelerators, and prototyping resources.",
    url: "https://www.bu.edu/innovate/",
    programs: ["Summer Accelerator", "Social Impact Award", "Spark! Technology Innovation Fellowship"],
  },
  {
    name: "Northeastern IDEA",
    university: "Northeastern University",
    description:
      "The venture accelerator at Northeastern offering gap-funding, mentorship, co-working space, and a startup studio for student entrepreneurs.",
    url: "https://entrepreneurship.northeastern.edu/",
    programs: ["Venture Accelerator", "Husky Startup Challenge", "Gap Fund"],
  },
  {
    name: "Babson Arthur M. Blank School",
    university: "Babson College",
    description:
      "Ranked #1 in entrepreneurship for 25+ years. Babson's ecosystem includes incubators, a seed fund, and deep connections to the Boston venture community.",
    url: "https://www.babson.edu/academics/centers-and-institutes/blank-institute/",
    programs: ["Butler Launch Pad", "B-SPROUT Fund", "Summer Venture Program"],
  },
  {
    name: "Tufts Gordon Institute",
    university: "Tufts University",
    description:
      "Bridges engineering and entrepreneurship with programs in technology commercialization, leadership, and venture creation.",
    url: "https://gordon.tufts.edu/",
    programs: ["Derby Entrepreneurship Center", "Tufts $100K New Ventures", "Cummings Fellows"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function UniversitiesSection() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header with logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <img
            src={terrierLogo}
            alt="Terrier Tech — Innovation for the Pack"
            className="mb-8 h-64 w-64 object-contain lg:h-80 lg:w-80"
          />
          <Badge className="mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/15">
            <GraduationCap className="mr-1.5 h-4 w-4" />
            University Entrepreneurship Centers
          </Badge>
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Boston's University Innovation Ecosystem
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground font-body">
            Greater Boston is home to the densest concentration of world-class university
            entrepreneurship programs. These centers offer mentorship, funding, workspace,
            and community to help you turn ideas into ventures.
          </p>
        </motion.div>

        {/* University cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {universities.map((uni) => (
            <motion.div key={uni.name} variants={itemVariants}>
              <a href={uni.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full rounded-2xl border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                  <CardHeader>
                    <CardDescription className="text-xs font-semibold uppercase tracking-wider text-primary font-body">
                      {uni.university}
                    </CardDescription>
                    <CardTitle className="flex items-center gap-2 font-display text-xl text-foreground">
                      {uni.name}
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-6 text-muted-foreground font-body">
                      {uni.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.programs.map((prog) => (
                        <Badge
                          key={prog}
                          variant="secondary"
                          className="rounded-full text-xs font-body"
                        >
                          {prog}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
