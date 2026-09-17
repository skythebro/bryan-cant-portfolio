# Design tokens

Workbench aesthetic: Linear-style docs, not a SaaS landing page. Dark only. One accent.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `oklch(0.145 0.008 264)` | Page |
| `--card` | `oklch(0.175 0.009 264)` | Panels |
| `--foreground` | `oklch(0.935 0.006 264)` | Body |
| `--muted-foreground` | `oklch(0.68 0.018 264)` | Secondary copy |
| `--border` | `oklch(0.92 0.01 264 / 10%)` | Hairlines |
| `--primary` / `--steel` | `oklch(0.78 0.042 248)` | Accent: links, metrics, live badge |
| `--primary-foreground` | `oklch(0.16 0.012 264)` | Text on accent |
| `--radius` | `0.375rem` | Tight, technical |

No second accent. No gradient text.

## Type

| Role | Family | Notes |
| --- | --- | --- |
| UI / headings | Outfit (geometric sans) | `--font-outfit` |
| Specs, tags, metrics, dates | Geist Mono | Uppercase tracking on `.spec` |

Body ~15px. Dense, not airy.

## Motion

Framer Motion on the identity rail and project cards. 220–350ms, `[0.22, 1, 0.36, 1]`. Availability pulse on the status dot. `prefers-reduced-motion` disables transitions.

## Layout

Sticky command bar. Identity rail (photo + spec sheet) sticky on large screens. Main column is the workbench: persona tabs, stack grid, compact timeline, contact.

Featured UI cards show a dense 2-up Nexus gallery (`public/foa/`). Click opens a lightbox (Esc / arrows). Non-featured shot cards use a single thumb or a 2-up pair.

## Icons

Lucide only.
