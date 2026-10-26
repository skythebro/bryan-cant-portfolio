# Design

One readable page, top to bottom. Dark, mostly neutral, one amber accent.

## Page order

1. Hero: avatar, short intro, contact buttons, three headline numbers
2. Things I've made: project cards in two columns, screenshot on top
3. What I'm working on now
4. Smaller projects: one line each
5. Experience
6. What I work with
7. Get in touch

All copy lives in `lib/content.ts`. Write it the way you'd say it to someone: first person, plain words, no buzzwords. Download numbers are Nexus "unique DLs" and get rechecked whenever `statsDate` changes.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `oklch(0.165 0.006 60)` | Page |
| `--card` | `oklch(0.2 0.008 60)` | Project cards |
| `--muted` | `oklch(0.255 0.008 60)` | Tags, hovers |
| `--foreground` | `oklch(0.96 0.008 80)` | Body |
| `--muted-foreground` | `oklch(0.74 0.012 70)` | Secondary text |
| `--border` | `oklch(0.9 0.01 70 / 11%)` | Dividers and card edges |
| `--primary` | `oklch(0.82 0.13 75)` | Links, numbers, the email button |

## Type

Geist for everything. Body text is 16px with relaxed line height; text blocks stay under ~70 characters wide (`max-w-2xl`).

## Screenshots

Card covers come from `public/foa/` (16:10, cropped). Clicking a cover opens all of that project's shots in a lightbox (Esc, arrow keys, swipe). Projects without screenshots show their logo or name on a plain panel.

## Icons

Lucide only.
