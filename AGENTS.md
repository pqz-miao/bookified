# AGENTS.md - Bookified Development Guide

## Project Overview
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: Radix UI + shadcn patterns
- **Forms**: react-hook-form + zod validation

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
```

### Building
```bash
npm run build      # Production build
npm run start      # Start production server
```

### Linting
```bash
npm run lint              # Run ESLint on entire codebase
npx eslint path/to/file   # Lint a specific file
npm run lint -- --fix     # Auto-fix linting issues
```

### Type Checking
```bash
npx tsc --noEmit          # Run TypeScript compiler (strict mode)
npx tsc --noEmit path/to/file  # Type-check a specific file
```

### Testing
> No test framework installed. To add Vitest:
> ```bash
> npm install -D vitest @vitejs/plugin-react @testing-library/react jsdom
> ```
> Add to package.json: `"test": "vitest", "test:run": "vitest run"`
> 
> Run tests:
> ```bash
> npm test -- --run       # Run all tests once
> npx vitest run path/to/test.spec.ts  # Single test file
> npx vittest run -t "test name"  # Tests matching pattern
> ```

---

## Code Style Guidelines

### Imports
1. Next.js/React built-ins
2. External libraries (radix-ui, react-hook-form)
3. Internal imports (`@/lib/*`, `@/components/*`)
4. Relative imports (`./*`)
5. Type imports

Use `@/*` for root-relative imports.

```typescript
import type { Metadata } from "next"
import { useState } from "react"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { User } from "./types"
```

### Formatting
- **Double quotes** for strings, **single quotes** only in JSX props
- **Trailing commas** where appropriate
- **Semicolons** at statement end
- Run `npx prettier --write .` for formatting

### Types
- Always use explicit types for function parameters and return values
- Use **interface** for object shapes, **type** for unions/intersections

### Naming Conventions
- **Components**: PascalCase (`Button`)
- **Functions/variables**: camelCase (`getUserData`)
- **Files**: PascalCase for components/types, kebab-case for configs
- **CSS Variables**: kebab-case (`--background`)

### Error Handling
- Use **try/catch** for async operations with meaningful errors
- Throw descriptive errors in hooks/utilities:
```typescript
if (!fieldContext) throw new Error("useFormField must be used within <FormField>")
```

### Component Patterns
- Add `"use client"` at top for client components
- Use `data-slot` and `data-*` attributes for styling hooks
- Use **cva** (class-variance-authority) for variant components

### Tailwind CSS
- Use CSS variables in globals.css for theming
- Use `@apply` sparingly; prefer utility classes
- Use `cn()` for conditional class merging

---

## Project Structure

```
/app                 # Next.js App Router pages
  layout.tsx         # Root layout
  page.tsx           # Home page
  globals.css        # Global styles + CSS variables
/components
  /ui                # shadcn-style UI components
/lib                 # Utilities (utils.ts, api, db, etc.)
```

---

## Common Tasks

### Adding a new UI component
1. Use existing components in `/components/ui/` as reference
2. Use Radix UI primitives where available
3. Export component and variants separately

### Adding a new page
1. Create `/app/[route]/page.tsx` for page component
2. Add `export const metadata` for SEO
3. Keep Server Components as default

### Form implementation
1. Use zod schema for validation
2. Use react-hook-form with `useForm()` hook
3. Use `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` components
