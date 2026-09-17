"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { personas, projects, type Persona } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
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
    <section id="work" className="scroll-mt-16">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="spec">01 — Featured engineering</p>
          <h2 className="mt-1 text-2xl font-medium tracking-tight">
            Three desks, one person
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Enterprise integrations, shipped mods with users, and product UI —
          Better UI, Avalon Mod Manager, and Avalon Atlas carry Nexus gallery
          shots. Same engineer.
        </p>
      </div>

      <Tabs
        value={persona}
        onValueChange={(value) => setPersona(value as Persona)}
        className="gap-4"
      >
        <TabsList
          variant="line"
          className="h-auto w-full flex-wrap justify-start gap-0 border-b border-border p-0"
        >
          {personas.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="h-auto flex-none flex-col items-start rounded-none px-3 py-2.5 text-left after:bg-primary data-active:text-foreground"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <span className="hidden font-mono text-[10px] font-normal tracking-wide text-muted-foreground sm:block">
                {item.hint}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {personas.map((item) => (
          <TabsContent key={item.id} value={item.id}>
            <AnimatePresence mode="wait">
              {persona === item.id ? (
                <div className="grid gap-3 md:grid-cols-2">
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
