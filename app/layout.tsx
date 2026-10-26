import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name}, junior software developer`;
const description =
  "Junior developer from Antwerp, Belgium. C#, .NET, Java, TypeScript and Rust. I make game mods and tools used by thousands of players.";

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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antwerp",
    addressCountry: "BE",
  },
  url: profile.links.github,
  sameAs: [
    profile.links.github,
    profile.links.githubSecond,
    profile.links.linkedin,
    profile.links.nexus,
    profile.links.thunderstore,
    profile.links.kofi,
  ],
  knowsLanguage: ["nl", "en", "fr"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable} h-full`}
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
