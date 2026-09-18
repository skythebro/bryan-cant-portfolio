"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { personas, projects, type Persona, type Project } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function arrangeCards(items: Project[]) {
  const lead = items.filter((project) => project.featured);
  const rest = items.filter((project) => !project.featured);
  const withShots = rest.filter((project) => (project.shots?.length ?? 0) > 0);
  const compact = rest.filter((project) => (project.shots?.length ?? 0) === 0);
  return { lead, withShots, compact };
}

function CardGrid({
  items,
  indexOffset,
}: {
  items: Project[];
  indexOffset: number;
}) {
  if (items.length === 0) return null;
  const lastSpans = items.length % 2 === 1;

  return (
    <div className="grid items-stretch gap-4 md:grid-cols-2">
      {items.map((project, index) => (
        <div
          key={project.id}
          className={
            lastSpans && index === items.length - 1
              ? "h-full md:col-span-2"
              : "h-full"
          }
        >
          <ProjectCard project={project} index={indexOffset + index} />
        </div>
      ))}
    </div>
  );
}

export function FeaturedWork() {
  const [persona, setPersona] = useState<Persona>("ui");

  const visible = useMemo(
    () =>
      projects
        .filter((project) => project.personas.includes(persona))
        .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0)),
    [persona],
  );

  const { lead, withShots, compact } = arrangeCards(visible);

  return (
    <section id="work" className="relative z-0 scroll-mt-20">
      <SectionHeading eyebrow="Featured work" title="Three desks, one person">
        Enterprise integrations, shipped mods with users, and product UI.
        Better UI, Avalon Mod Manager, and Avalon Atlas carry Nexus gallery
        shots. Same engineer.
      </SectionHeading>

      <Tabs
        value={persona}
        onValueChange={(value) => setPersona(value as Persona)}
        className="gap-5"
      >
        <TabsList
          variant="segmented"
          className="w-full flex-wrap justify-start"
        >
          {personas.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="flex-col items-start whitespace-normal text-left"
            >
              <span className="text-sm leading-5 font-medium">{item.label}</span>
              <span className="hidden text-[11px] leading-4 font-normal text-muted-foreground sm:block">
                {item.hint}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {personas.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <AnimatePresence mode="wait">
              {persona === item.id ? (
                <div className="flex flex-col gap-5">
                  {lead.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                  <CardGrid items={withShots} indexOffset={lead.length} />
                  <CardGrid
                    items={compact}
                    indexOffset={lead.length + withShots.length}
                  />
                </div>
              ) : null}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
