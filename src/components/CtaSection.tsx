import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <Card className="rounded-3xl border-0 bg-foreground shadow-lg overflow-hidden">
        <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <h3 className="text-2xl font-display text-background">
              Want to make this site even more useful?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground font-body">
              Next upgrades could include founder checklists, a searchable events calendar,
              legal templates, a funding tracker, expert office hours, and separate paths for
              biotech, AI, climate, and SaaS founders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button variant="secondary" className="rounded-2xl font-body font-semibold">
              Add Founder Checklist
            </Button>
            <Button variant="outline" className="rounded-2xl border-border/30 bg-transparent text-background hover:bg-background hover:text-foreground font-body font-semibold">
              Add Events Calendar
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
