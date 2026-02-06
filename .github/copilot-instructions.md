# AI Coding Agent Instructions for SNWHITEHOST

## Project Overview
SN White Hosting is a **Next.js 16 + TypeScript web application** for a multi-service hosting provider. It's a marketing/sales platform built with shadcn/ui components, featuring dynamic pricing, multi-language support, theme customization, and festive effects.

## Architecture & Key Patterns

### Context Providers Pattern (Critical)
The app uses **three parallel context providers** that must be initialized in `layout.tsx`:
- **ThemeProvider**: Manages light/dark theme + 5 color variants (blue/green/orange/red/cyan) + festive themes (Valentine, Christmas, Halloween, Easter, BlackFriday, Summer, NewYear, StPatricks)
- **LanguageProvider**: Supports 4 languages (en/es/de/nl) with browser detection fallback
- **CurrencyProvider**: Handles EUR↔USD conversion (1.08 rate) + billing cycle toggle + annual discount (15%)

All state persists to localStorage. Example usage in components:
```tsx
const { theme, setTheme } = useTheme()
const { t } = useLanguage()  // Access translations via t object
const { formatPrice } = useCurrency()
```

### File Structure & Path Aliases
- `@/*` points to workspace root (configured in tsconfig.json)
- UI components in `/components/ui/` (shadcn design system)
- Page sections in `/components/` (e.g., `hero-section.tsx`, `pricing-section.tsx`)
- Translations & utilities in `/lib/` (not api-only)
- App routes in `/app/` using Next.js App Router
- Product categories organized in `/app/[category]/[product]/` structure

### Pricing & Commerce Pattern
Pricing data is **hardcoded in component files** (e.g., `pricing-section.tsx`), stored in USD, then formatted via `useCurrency()`:
```tsx
const hostingPlans = [
  { name: "Plan Basic", priceUSD: 5.00, ... }
]
formatPrice(plan.priceUSD * 0.92)  // Convert to EUR with discount if needed
```
All customer-facing links route to `https://clients.snwhitehosting.com` for purchases/login.

### Translation System
`lib/translations.ts` exports:
- `type Language = "en" | "es" | "de" | "nl"`
- Flat `translations` object with nested keys (e.g., `translations.en.nav.hosting`)
- `getTranslation(lang)` function returns typed translation object
- Use `useLanguage()` hook to access `t` object in components

## Development Workflow

### Build & Run
```bash
pnpm dev       # Start dev server (port 3000)
pnpm build     # Next.js production build
pnpm start     # Run production build
pnpm lint      # ESLint check
```

### TypeScript & Build Notes
- `tsconfig.json` has `strict: true` + `skipLibCheck: true`
- `next.config.mjs` ignores TypeScript build errors (`ignoreBuildErrors: true`) — **fix lint warnings, not build errors**
- Images have `unoptimized: true` (static generation)
- Generated next-env.d.ts should not be edited

### Component Creation Pattern
1. Use `"use client"` directive for interactive components needing hooks
2. Import UI components from `@/components/ui/`
3. Use `cn()` from `@/lib/utils` to merge Tailwind classes safely
4. Access i18n via `useLanguage()`, `useCurrency()`, `useTheme()`
5. Link to product pages or client portal consistently

## Key Files & Examples

| File | Purpose |
|------|---------|
| [app/layout.tsx](app/layout.tsx) | Root layout with three context providers |
| [app/page.tsx](app/page.tsx) | Homepage — orchestrates ~20 section components |
| [components/pricing-section.tsx](components/pricing-section.tsx) | Pricing UI with hardcoded plans + currency/billing toggle |
| [components/header.tsx](components/header.tsx) | Navigation with language-aware dropdowns |
| [lib/translations.ts](lib/translations.ts) | All i18n strings (558 lines) |
| [components.json](components.json) | shadcn/ui config (style: "new-york", baseColor: "neutral") |

## Common Tasks

### Add a New Language
1. Add language code to `Language` type in `lib/translations.ts`
2. Add translation object (copy from existing language, translate strings)
3. Update `LanguageProvider` validation in `language-provider.tsx`
4. Update `LanguageSwitcher` component if needed

### Update Pricing
- Edit hardcoded plans in component files (e.g., `pricing-section.tsx`)
- Prices stored in USD, UI handles EUR/USD conversion automatically
- Update both `hostingPlans` and `vpsPlans` arrays if needed

### Add a New Product Page
1. Create `/app/[category]/[product]/page.tsx`
2. Create corresponding component in `/components/` if complex
3. Add link in `header.tsx` navigation menu
4. Add translations in `lib/translations.ts` if customer-facing

### Create a New Reusable Component
- If UI primitive: add to `components/ui/` (shadcn-style)
- If section/feature: add to `components/` directly
- Prefer composition over feature flags; use props for variants
- Always use `"use client"` if accessing context providers

## Integration Points

### Analytics
- Vercel Analytics integrated in `layout.tsx`: `<Analytics />`
- No custom tracking — data flows to Vercel dashboard

### External Services
- Client portal: `https://clients.snwhitehosting.com` (hardcoded URLs in components)
- No internal API layer detected — static site architecture

### State Management
- Context API only (no Redux/Zustand) — sufficient for current scope
- All state persists to localStorage via `useEffect` hooks

## Debugging Tips

1. **Theme not updating**: Check `mounted` state in providers — SSR hydration requires client-side state initialization
2. **Missing translations**: Look for fallback to key name; ensure language code is in `Language` type
3. **Price calculation wrong**: Verify `currency` and `billingCycle` context state in DevTools
4. **Build warnings**: Check `next.config.mjs` — TypeScript errors are ignored intentionally

## Version & Dependencies
- Next.js 16.0.10 (App Router)
- React 19 (via Next.js)
- TypeScript 5+
- shadcn/ui components (radix-ui primitives)
- Tailwind CSS (CSS variables for theming)
- Lucide icons
- pnpm package manager
