# LostFound - Lost & Found Mobile App

## Overview

LostFound is a premium, high-end SaaS-style landing page for a Lost & Found mobile application built with React and TypeScript. The application enables community members to report lost and found items, facilitating the reunion of belongings with their owners through a modern, glassmorphism-styled web interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system featuring glassmorphism effects, gradients, and premium SaaS aesthetics
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion integration planned for scroll-based animations, stagger effects, and micro-interactions

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Development Mode**: Vite middleware integration for hot module replacement and development server
- **Build Process**: ESBuild for production bundling with platform-specific optimizations

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Session Storage**: PostgreSQL session store using connect-pg-simple
- **Development Fallback**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL backing store
- **User Schema**: Basic username/password authentication with UUID primary keys
- **Password Security**: Planned implementation with proper hashing (bcrypt recommended)

### Design System
- **Color Palette**: Extended Tailwind configuration with custom primary colors (indigo/purple spectrum)
- **Typography**: Inter font family with comprehensive weight variations
- **Components**: Comprehensive UI kit including forms, navigation, cards, modals, and interactive elements
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Visual Effects**: CSS custom properties for consistent theming and glassmorphism effects

### External Dependencies

- **Database Hosting**: Neon Database serverless PostgreSQL
- **UI Framework**: Radix UI primitives for accessibility and customization
- **Animation Library**: Framer Motion for advanced animations and interactions
- **Form Handling**: React Hook Form with Zod validation
- **Date Management**: date-fns for date formatting and manipulation
- **Development Tools**: Replit integration with cartographer and runtime error overlay
- **Build Tools**: Vite with React plugin, PostCSS for CSS processing
- **Code Quality**: TypeScript strict mode with comprehensive type checking