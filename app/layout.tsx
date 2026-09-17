import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — Junior software engineer`;
const description =
  "Stabroek, Belgium. Available immediately for junior software / fullstack / Java / .NET / React. C# automation, shipped game UIs, desktop tooling.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://skythebro.github.io"),
  openGraph: {
    title,
    description,
    locale: "en_BE",
    type: "website",
    images: [{ url: assetPath(profile.photo.src) }],
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: assetPath("/favicon.svg"),
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [...profile.aliases],
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stabroek",
    addressRegion: "Antwerp",
    addressCountry: "BE",
  },
  url: profile.links.github,
  sameAs: [
    profile.links.github,
    profile.links.githubSchool,
    profile.links.linkedin,
    profile.links.nexus,
    profile.links.nexusNext,
    profile.links.thunderstore,
    profile.links.kofi,
  ],
  knowsLanguage: ["nl", "en", "fr"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
