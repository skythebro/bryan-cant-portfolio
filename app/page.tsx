import { ContactCta } from "@/components/contact-cta";
import { FeaturedWork } from "@/components/featured-work";
import { IdentityRail } from "@/components/identity-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackGrid } from "@/components/stack-grid";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to featured work
      </a>
      <SiteHeader />
      <main
        id="top"
        className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(280px,340px)_minmax(0,1fr)] lg:items-start lg:gap-8 lg:py-8"
      >
        <IdentityRail />
        <div className="flex min-w-0 flex-col gap-14 pb-8">
          <FeaturedWork />
          <StackGrid />
          <Timeline />
          <ContactCta />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
