# Ambi Elite - Neuromotion Platform

## Overview

Ambi Elite is a scientific education and research platform dedicated to documenting and advancing the study of Neuromotion - a framework describing how human movement, balance, and energy transfer are governed by bilateral motor organization. The platform serves as an informational website with multiple pages explaining the science, a contact form for inquiries, and foundation/donation information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Form Handling**: React Hook Form with Zod validation

The frontend follows a page-based structure with shared layout components. Each page uses a consistent `Layout` component that provides navigation and content wrapping. The design system uses a dark theme with cyan (precision) and orange (power) accent colors reflecting the Neuromotion concepts.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build**: Custom build script using esbuild for server and Vite for client
- **API Pattern**: REST endpoints defined in shared route contracts

The server uses a simple Express setup with JSON body parsing and serves both the API and static files in production. Development mode uses Vite's middleware for hot module replacement.

### Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit with `db:push` command

The schema is minimal, currently containing only a `contact_messages` table for storing contact form submissions.

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database schema and Zod validation schemas derived from Drizzle
- `routes.ts`: API route contracts with input/output type definitions

This pattern ensures type safety across the full stack and prevents API contract drift.

### Build and Development
- **Development**: `npm run dev` runs tsx for the server with Vite middleware
- **Production Build**: `npm run build` creates bundled server (dist/index.cjs) and static client (dist/public)
- **Type Checking**: `npm run check` runs TypeScript compiler

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection pooling with node-postgres (`pg`)
- Session storage with `connect-pg-simple`

### UI/Component Libraries
- Radix UI primitives for accessible components
- Lucide React for iconography
- Embla Carousel for carousel functionality
- Vaul for drawer components
- CMDK for command palette

### Development Tools
- Vite with React plugin for frontend bundling
- Replit-specific plugins for development (error overlay, cartographer, dev banner)
- PostCSS with Tailwind and Autoprefixer