import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const quickGuides = [
  {
    title: "I have an idea but no startup experience",
    items: [
      "Define the problem in one sentence",
      "List 10 people who have this problem",
      "Interview at least 5 of them",
      "Write down what they are using today",
      "Identify why your approach is better",
    ],
  },
  {
    title: "I need help finding funding",
    items: [
      "Start with grants and non-dilutive programs",
      "Build a one-page overview and short pitch deck",
      "Estimate first-year costs and milestones",
      "Research state and city funding options",
      "Prepare to explain traction, team, and market need",
    ],
  },
  {
    title: "I need mentors and a founder network",
    items: [
      "Join local founder events and office hours",
      "Use Boston-based accelerators and innovation hubs",
      "Connect with university entrepreneurship centers",
      "Attend ecosystem events monthly",
      "Track who can advise on product, legal, and fundraising",
    ],
  },
];

const faqItems = [
  {
    q: "Do I need a technical co-founder?",
    a: "Not always. Many successful founders start by understanding the market deeply and partnering with technical talent later. Focus on validation first.",
  },
  {
    q: "How much money do I need to start?",
    a: "Many early-stage activities cost nothing — customer interviews, market research, and joining community events. Focus on learning before spending.",
  },
  {
    q: "What makes Boston a strong place to launch?",
    a: "Boston offers a dense network of universities, startup programs, innovation spaces, investors, and founder events. That makes it especially useful for first-time founders who need support.",
  },
  {
    q: "What should I do in my first 30 days?",
    a: "Focus on customer discovery, market research, a simple value proposition, and finding a few trusted mentors or advisors. Avoid overbuilding too early.",
  },
];

export default function QuickGuidesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Tabs defaultValue="guides" className="space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-3xl font-display text-foreground">Guides & FAQ</h2>
          </div>
          <TabsList className="rounded-2xl font-body">
            <TabsTrigger value="guides" className="rounded-xl">Quick Guides</TabsTrigger>
            <TabsTrigger value="faq" className="rounded-xl">FAQ</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="guides">
          <div className="grid gap-5 md:grid-cols-3">
            {quickGuides.map((guide, i) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="rounded-3xl border-border/60 shadow-sm h-full">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-display text-foreground">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {guide.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 font-body">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {j + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card className="rounded-3xl border-border/60 shadow-sm">
            <CardContent className="p-6 lg:p-8">
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/50 px-2">
                    <AccordionTrigger className="font-body font-medium text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
