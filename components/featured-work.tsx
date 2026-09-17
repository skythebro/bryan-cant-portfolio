"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { personas, projects, type Persona } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FeaturedWork() {
  const [persona, setPersona] = useState<Persona>("ui");

  const visible = useMemo(
    () =>
      projects
        .filter((project) => project.personas.includes(persona))
        .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0)),
    [persona],
  );

  return (
    <section id="work" className="scroll-mt-20">
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
          variant="default"
          className="h-auto w-full flex-wrap justify-start gap-1.5 rounded-2xl bg-card/80 p-1.5"
        >
          {personas.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="h-auto flex-none flex-col items-start rounded-xl px-3.5 py-2 text-left data-active:bg-background data-active:text-foreground"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <span className="hidden text-[11px] font-normal text-muted-foreground sm:block">
                {item.hint}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {personas.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <AnimatePresence mode="wait">
              {persona === item.id ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {visible.map((project, index) => (
                    <div
                      key={project.id}
                      className={project.featured ? "md:col-span-2" : undefined}
                    >
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
                </div>
              ) : null}
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
