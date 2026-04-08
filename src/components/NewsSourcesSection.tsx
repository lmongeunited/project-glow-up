import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket, Globe, Brain, BarChart3, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface NewsSource {
  name: string;
  url: string;
  description: string;
}

interface Category {
  icon: React.ReactNode;
  label: string;
  title: string;
  sources: NewsSource[];
}

const categories: Category[] = [
  {
    icon: <Rocket className="h-4 w-4" />,
    label: "Startup & VC Focus",
    title: "Must-Follow Startup News",
    sources: [
      { name: "TechCrunch", url: "https://techcrunch.com/", description: "Best overall for startup news, funding rounds, and acquisitions. Breaks major VC deals and startup launches first." },
      { name: "VentureBeat", url: "https://venturebeat.com/", description: "Strong on AI startups, enterprise tech, and industry analysis. Great for understanding market trends." },
      { name: "The Information", url: "https://www.theinformation.com/", description: "Premium, insider-level reporting on startups and Silicon Valley. Deep dives into strategy and business models." },
      { name: "Crunchbase News", url: "https://news.crunchbase.com/", description: "Data-driven startup insights covering funding, exits, and investors." },
    ],
  },
  {
    icon: <Globe className="h-4 w-4" />,
    label: "Founder Communities",
    title: "Communities & Early-Stage Trends",
    sources: [
      { name: "Product Hunt", url: "https://www.producthunt.com/", description: "Discover brand-new startups and products daily. Great for spotting trends before they hit mainstream." },
      { name: "Hacker News", url: "https://news.ycombinator.com/", description: "Raw discussions from founders, engineers, and investors. Less polished, but highly insightful." },
      { name: "Indie Hackers", url: "https://www.indiehackers.com/", description: "Real stories from bootstrapped founders building profitable businesses." },
    ],
  },
  {
    icon: <Brain className="h-4 w-4" />,
    label: "Deep Analysis",
    title: "Big Picture Tech Trends",
    sources: [
      { name: "WIRED", url: "https://www.wired.com/", description: "Explains how tech impacts society and the future." },
      { name: "MIT Technology Review", url: "https://www.technologyreview.com/", description: "Cutting-edge innovation and emerging tech from MIT." },
      { name: "Stratechery", url: "https://stratechery.com/", description: "Strategic analysis of tech companies and markets." },
    ],
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    label: "Tech + Business",
    title: "Broader Coverage with Startup Context",
    sources: [
      { name: "The Verge", url: "https://www.theverge.com/", description: "Tech + culture + product ecosystem coverage." },
      { name: "Ars Technica", url: "https://arstechnica.com/", description: "Deep technical coverage — great for builders." },
      { name: "GeekWire", url: "https://www.geekwire.com/", description: "Strong startup ecosystem coverage, especially across U.S. regions." },
    ],
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Newsletters",
    title: "Best Newsletters for Founders",
    sources: [
      { name: "TLDR", url: "https://tldr.tech/", description: "Quick daily startup + tech summaries delivered to your inbox." },
      { name: "The Hustle", url: "https://thehustle.co/", description: "Startup stories & trends in a digestible format." },
      { name: "Morning Brew", url: "https://www.morningbrew.com/", description: "Digestible business + tech news every morning." },
      { name: "Benedict Evans Newsletter", url: "https://www.ben-evans.com/newsletter", description: "Macro tech trends and strategic insights." },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NewsSourcesSection() {
  return (
    <section className="border-t border-border bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/15">
            📰 Stay Informed
          </Badge>
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            National Tech & Startup News
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground font-body">
            The best publications, communities, and newsletters every founder should follow to stay ahead of trends and opportunities.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground font-body">{cat.label}</p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {cat.sources.map((src) => (
                  <motion.div key={src.name} variants={itemVariants}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                      <Card className="h-full rounded-2xl border-border/60 transition-all duration-300 hover:shadow-md hover:border-primary/30">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2 text-base font-display text-foreground">
                            {src.name}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm leading-relaxed text-muted-foreground font-body">
                            {src.description}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
