import React, { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    name: "Startup Boston",
    category: "Founder Communities",
    audience: "All founders, startup employees, and newcomers",
    stage: "Any",
    type: "Community / Events",
    location: "Greater Boston / New England",
    url: "https://www.startupbos.org/",
    description: "The connective hub for the Greater Boston and New England startup community — connecting founders, operators, and newcomers across all industries, roles, and stages. Home of Startup Boston Week, an annual conference bringing the entire ecosystem together.",
    featured: true,
  },
  {
    name: "Startup Boston x City of Boston Event Series",
    category: "Beginner Support",
    audience: "First-time founders",
    stage: "Idea",
    type: "Events",
    location: "Boston",
    url: "https://www.boston.gov/government/cabinets/economic-opportunity-and-inclusion/startups",
    description: "A founder-friendly event series covering idea validation, co-founder matching, fundraising, and how to navigate Boston's startup ecosystem.",
    featured: true,
  },
  {
    name: "MassChallenge",
    category: "Accelerators",
    audience: "High-growth startups",
    stage: "Early Stage",
    type: "Accelerator",
    location: "Boston",
    url: "https://masschallenge.org/",
    description: "A well-known accelerator with programming, mentorship, and connections for startups tackling major challenges across several industries.",
    featured: true,
  },
  {
    name: "MassVentures",
    category: "Funding",
    audience: "Massachusetts startups",
    stage: "Early Stage",
    type: "Capital",
    location: "Massachusetts",
    url: "https://www.massventures.com/",
    description: "A Massachusetts venture firm supporting early-stage companies with capital and startup programs.",
    featured: true,
  },
  {
    name: "EOED Business and Innovation Programs",
    category: "Funding",
    audience: "Founders and small businesses",
    stage: "Any",
    type: "Programs",
    location: "Massachusetts",
    url: "https://www.mass.gov/info-details/eoed-programs-and-grants-business-and-innovation",
    description: "A state resource page listing loans, grants, venture programs, technical assistance, and additional business support resources.",
    featured: false,
  },
  {
    name: "CIC Innovation Programs",
    category: "Workspace & Community",
    audience: "Startups and innovation teams",
    stage: "Any",
    type: "Coworking / Programs",
    location: "Boston / Cambridge",
    url: "https://cic.com/programs/",
    description: "Innovation programming, curated ecosystem connections, coworking, and support for startups entering or growing in Greater Boston.",
    featured: true,
  },
  {
    name: "Women Entrepreneurs Boston (WE BOS)",
    category: "Founder Communities",
    audience: "Women entrepreneurs",
    stage: "Any",
    type: "Community / Events",
    location: "Greater Boston",
    url: "https://www.boston.gov/departments/womens-advancement/women-entrepreneurs-boston",
    description: "A City-supported initiative with tools, events, and community connections for women entrepreneurs across Greater Boston.",
    featured: false,
  },
  {
    name: "City of Boston Funding Opportunities",
    category: "Funding",
    audience: "Small businesses and entrepreneurs",
    stage: "Any",
    type: "Grants",
    location: "Boston",
    url: "https://www.boston.gov/departments/economic-opportunity-and-inclusion/funding-opportunities",
    description: "A central page for City funding and grant opportunities, plus links to permits, certifications, and business help resources.",
    featured: false,
  },
  {
    name: "Boston Open for Business",
    category: "City Resources",
    audience: "Companies expanding or launching in Boston",
    stage: "Any",
    type: "Business Support",
    location: "Boston",
    url: "https://www.boston.gov/government/cabinets/economic-opportunity-and-inclusion/bostons-open-business",
    description: "A City of Boston landing page for business support, industry guidance, site selection, and ways to connect with local resources.",
    featured: false,
  },
];

const filters = ["All", "Beginner Support", "Accelerators", "Funding", "Workspace & Community", "Founder Communities", "City Resources"];

const categoryColors: Record<string, string> = {
  "Beginner Support": "bg-accent/10 text-accent",
  "Accelerators": "bg-primary/10 text-primary",
  "Funding": "bg-emerald-100 text-emerald-700",
  "Workspace & Community": "bg-violet-100 text-violet-700",
  "Founder Communities": "bg-rose-100 text-rose-700",
  "City Resources": "bg-sky-100 text-sky-700",
};

interface ResourcesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function ResourcesSection({ sectionRef }: ResourcesSectionProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesFilter = activeFilter === "All" || resource.category === activeFilter;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        resource.name.toLowerCase().includes(q) ||
        resource.description.toLowerCase().includes(q) ||
        resource.category.toLowerCase().includes(q) ||
        resource.audience.toLowerCase().includes(q) ||
        resource.stage.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  const featured = resources.filter((r) => r.featured);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Featured Resources */}
      <div className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl font-display text-foreground">Featured resources</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((resource, i) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="group rounded-3xl border-border/60 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                <CardHeader className="flex-1">
                  <Badge className={`w-fit rounded-full text-xs font-body ${categoryColors[resource.category] || "bg-secondary text-secondary-foreground"}`}>
                    {resource.category}
                  </Badge>
                  <CardTitle className="text-lg font-display text-foreground">{resource.name}</CardTitle>
                  <CardDescription className="font-body leading-relaxed">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <MapPin className="h-3.5 w-3.5" />
                    {resource.location}
                    <span className="mx-1">·</span>
                    {resource.stage}
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full rounded-xl font-body group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Visit Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Resources */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-display text-foreground">All resources</h2>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 rounded-xl font-body"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                variant={activeFilter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(f)}
                className="rounded-xl text-xs font-body"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => (
            <Card key={resource.name} className="group rounded-2xl border-border/60 shadow-sm transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge className={`rounded-full text-xs font-body ${categoryColors[resource.category] || "bg-secondary text-secondary-foreground"}`}>
                    {resource.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-body">{resource.stage}</span>
                </div>
                <CardTitle className="text-base font-display text-foreground">{resource.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground font-body">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                    <MapPin className="h-3.5 w-3.5" /> {resource.location}
                  </span>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="rounded-xl text-xs font-body text-primary">
                      Visit <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredResources.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground font-body">
              No resources match your search. Try a different filter or keyword.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
