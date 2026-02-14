# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Serenity Behavioral Services client website — a Nuxt 4 static site with bilingual (English/Spanish) support for a behavioral health clinic in Las Vegas, Nevada. Single-page architecture with hash-based section navigation.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

No test runner or linter is currently configured.

## Architecture

**Framework:** Nuxt 4.3.1 with Vue 3 Composition API, TypeScript, Tailwind CSS v4, shadcn-vue (New York style).

**Single-page layout:** `app/pages/index.vue` lazy-loads 12 section components. Navigation uses hash links (`/#services`, `/#team`) with smooth scrolling defined in `app/router.options.ts`.

**Key directories:**
- `app/components/sections/` — Page sections (HeroSection, ServicesSection, TeamSection, etc.)
- `app/components/layout/` — TheNavbar, TheFooter, TheTopBar (prefixed with `The`)
- `app/components/common/` — Reusable components (SectionHeading, AnimatedCounter, LanguageSwitcher)
- `app/composables/` — Business logic returning computed data from i18n keys (useNavigation, useServices, useStaff, useJsonLd, useCountUp)
- `app/types/index.ts` — Shared TypeScript interfaces (NavigationItem, Service, StaffMember, Stat)
- `locales/` — `en.json` and `es.json` translation files with flat dot-notation keys

**Data pattern:** All content lives in locale JSON files. Composables map i18n keys to typed arrays via `computed()`. There are no API calls or external data fetches.

**i18n:** `@nuxtjs/i18n` with `no_prefix` strategy. Browser detection with cookie persistence (`serenity_locale`). Every user-facing string uses `t()` from `useI18n()`.

**Animations:** Custom `v-reveal` directive (`app/plugins/scroll-reveal.ts`) uses IntersectionObserver for scroll animations. Hero section has mouse parallax tracking. CSS animations (gradient-shift, ripple, float) defined in `app/assets/css/tailwind.css` with `prefers-reduced-motion` support.

**SEO:** Schema.org structured data (LocalBusiness/MedicalBusiness) via `useJsonLd` composable, OG images via `nuxt-og-image`, HTML validation via `@nuxtjs/html-validator`.

## Conventions

- Components use `<script setup lang="ts">` with `interface Props` + `defineProps<Props>()`
- Composables follow `useXxx` naming and return computed values
- Tailwind utility-first styling; custom theme colors: `navy-*` (primary palette) and `accent-*` (cyan)
- Class merging utility at `app/lib/utils.ts` (`cn` function using `tailwind-merge` + `clsx`)
- All images in `public/images/` are WebP format
- Nuxt auto-imports are enabled — no explicit imports for Vue APIs, composables, or components

## Performance

- Sections are lazy-loaded (`<LazyHeroSection>` etc.)
- `lucide-vue-next` is split into a separate chunk via Vite's `manualChunks`
- Static assets served with immutable cache headers (1 year)
- Brotli/Gzip compression enabled in Nitro
- Hero image is preloaded via `<link rel="preload">`