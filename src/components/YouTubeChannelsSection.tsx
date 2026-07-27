import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Channel {
  name: string;
  url: string;
  host: string;
  location: string;
  description: string;
  isBoston: boolean;
}

const channels: Channel[] = [
  {
    name: "Y Combinator",
    url: "https://www.youtube.com/@ycombinator",
    host: "Michael Seibel & YC Partners",
    location: "San Francisco, CA",
    description:
      "The gold standard for startup advice. Packed with founder interviews, pitch critiques, and tactical guidance from the world's most iconic startup accelerator.",
    isBoston: false,
  },
  {
    name: "Harvard Innovation Labs",
    url: "https://www.youtube.com/@HarvardInnovationLabs",
    host: "Harvard i-lab Team",
    location: "Boston, MA",
    description:
      "A Boston-area powerhouse featuring founder stories, workshops, and expert panels from Harvard's cross-campus entrepreneurship hub.",
    isBoston: true,
  },
  {
    name: "MIT Entrepreneurship",
    url: "https://www.youtube.com/@MITEntrepreneurship",
    host: "MIT Martin Trust Center",
    location: "Cambridge, MA",
    description:
      "Deep, practical insights from MIT's entrepreneurship ecosystem — covering venture creation, product development, and scaling deep-tech startups.",
    isBoston: true,
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
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function YouTubeChannelsSection() {
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
            <Youtube className="mr-1.5 h-4 w-4" />
            Watch & Learn
          </Badge>
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            YouTube Channels for Tech Entrepreneurs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground font-body">
            Three essential channels packed with startup advice, founder stories, and expert insights — including two right here from Boston.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {channels.map((channel) => (
            <motion.div key={channel.name} variants={itemVariants}>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <Card className="h-full rounded-2xl border-border/60 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-2">
                      {channel.isBoston && (
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-primary/10 text-primary hover:bg-primary/15"
                        >
                          <MapPin className="mr-1 h-3 w-3" />
                          Boston Area
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="flex items-center gap-2 font-display text-xl text-foreground">
                      <Youtube className="h-5 w-5 shrink-0 text-red-500" />
                      {channel.name}
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body">
                      {channel.host} · {channel.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground font-body">
                      {channel.description}
                    </p>
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
