# Design tokens

Personal studio, not a terminal or Linear workbench. Dark and warm. One honey accent.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `oklch(0.2 0.018 55)` | Page |
| `--card` | `oklch(0.255 0.02 52)` | Panels |
| `--foreground` | `oklch(0.96 0.014 80)` | Body |
| `--muted-foreground` | `oklch(0.76 0.03 65)` | Secondary copy |
| `--border` | `oklch(0.9 0.03 70 / 14%)` | Soft edges |
| `--primary` | `oklch(0.82 0.11 72)` | Accent: links, metrics, live badge |
| `--primary-foreground` | `oklch(0.24 0.03 55)` | Text on accent |
| `--radius` | `1rem` | Rounded cards and chips |

Page wash is two warm radial glows. No blueprint grid.

## Type

| Role | Family | Notes |
| --- | --- | --- |
| UI / headings | Outfit | `--font-outfit` |
| Rare code-ish leftovers | Geist Mono | Avoid uppercase tracking banners |

Body ~15px. Give cards air. Section labels are sentence case (`.label`), not `01 FEATURED ENGINEERING`.

## Motion

Framer Motion on the identity rail and project cards. 220–350ms, `[0.22, 1, 0.36, 1]`. Availability pulse on the status dot. `prefers-reduced-motion` disables transitions.

## Layout

Soft sticky header. Identity rail (circular skythebro avatar + bio) sticky on large screens. Main column is featured work, stack, timeline, contact.

Featured UI cards show a Nexus gallery (`public/foa/`). Click opens a lightbox (Esc / arrows). Captions sit under the shot so they never cover a heading.

Project titles are the card heading. Kickers become wrapping chips. No watermark text behind or across titles.

## Icons

Lucide only.
