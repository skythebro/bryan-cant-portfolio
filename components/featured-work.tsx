"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  isFeaturedLead,
  personas,
  projects,
  type Persona,
  type Project,
} from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { tabsListVariants, tabsTriggerClassName } from "@/components/ui/tabs";

function arrangeCards(items: Project[], persona: Persona) {
  const lead = items.filter((project) => isFeaturedLead(project, persona));
  const rest = items.filter((project) => !isFeaturedLead(project, persona));
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
          <ProjectCard project={project} index={indexOffset + index} lead={false} />
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

  const { lead, withShots, compact } = arrangeCards(visible, persona);

  return (
    <section id="work" className="relative z-0 scroll-mt-20">
      <SectionHeading eyebrow="Featured work" title="Three desks, one person">
        Enterprise integrations, shipped mods with users, and product UI.
        Better UI, Avalon Mod Manager, and Avalon Atlas carry Nexus gallery
        shots. Same engineer.
      </SectionHeading>

      <div className="group/tabs flex flex-col gap-5" data-orientation="horizontal">
        <div
          role="tablist"
          aria-label="Featured desks"
          data-slot="tabs-list"
          data-variant="segmented"
          className={cn(
            tabsListVariants({ variant: "segmented" }),
            "w-full flex-wrap justify-start",
          )}
        >
          {personas.map((item) => {
            const active = persona === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`desk-tab-${item.id}`}
                aria-controls="desk-tab-panel"
                aria-selected={active}
                data-slot="tabs-trigger"
                data-active={active ? "" : undefined}
                tabIndex={active ? 0 : -1}
                className={cn(
                  tabsTriggerClassName,
                  "flex-col items-start whitespace-normal text-left",
                )}
                onClick={() => setPersona(item.id)}
                onKeyDown={(event) => {
                  const index = personas.findIndex((entry) => entry.id === persona);
                  if (index < 0) return;
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    setPersona(personas[(index + 1) % personas.length].id);
                  }
                  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    setPersona(
                      personas[(index - 1 + personas.length) % personas.length]
                        .id,
                    );
                  }
                }}
              >
                <span className="text-sm leading-5 font-medium">{item.label}</span>
                <span className="hidden text-[11px] leading-4 font-normal text-muted-foreground sm:block">
                  {item.hint}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="desk-tab-panel"
          aria-labelledby={`desk-tab-${persona}`}
          data-slot="tabs-content"
          className="flex-1 text-sm outline-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={persona}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              {lead.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  lead
                />
              ))}
              <CardGrid items={withShots} indexOffset={lead.length} />
              <CardGrid
                items={compact}
                indexOffset={lead.length + withShots.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
