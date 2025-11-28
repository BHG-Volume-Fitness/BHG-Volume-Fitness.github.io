# Volume Fitness Landing Page

## Overview
A modern, luxury single-page landing site for Volume Fitness featuring cinematic scrolling sections, parallax effects, and premium fitness-focused design. The application showcases AI-powered music technology that syncs with runners' pace and location.

## Project Architecture

### Frontend (React + TypeScript)
- **Single-page application** with three full-screen sections
- **Smooth scroll-snap** navigation with vertical transitions
- **Parallax effects** using Framer Motion for cinematic feel
- **Intersection Observer** animations for fade-in and slide-up effects
- **Premium typography** using Inter and Poppins fonts
- **Fully responsive** design optimized for all devices

### Backend (Express.js)
- Contact form submission endpoint
- In-memory storage for contact submissions
- Form validation using Zod schemas

### Design System
- **Color Scheme**: Premium dark theme with primary blue accent
- **Typography**: Inter/Poppins for luxury athletic aesthetic
- **Spacing**: Generous padding (py-16 to py-24 desktop, py-8 to py-12 mobile)
- **Components**: Shadcn UI components with custom styling

## Features Implemented

### Section 1: Hero
- Full-screen high-resolution background image with parallax
- Centered title and subtitle with fade-in animations
- Smooth scroll indicator
- Text shadows for readability over imagery

### Section 2: Experience
- Two-column layout with logo placeholder and content
- Translucent dark overlay for text readability
- Detailed AI music technology description
- Fade and slide animations triggered on scroll
- Parallax background movement

### Section 3: Contact Form
- Dark gradient background for premium contrast
- Form fields: Name, Email, Company (optional), Message
- Client-side validation with Zod
- Smooth focus effects with glowing borders
- Loading states during submission
- Success/error toast notifications

## Technical Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Validation**: Zod with Drizzle-Zod integration
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Shadcn UI components
- **Routing**: Wouter

## Recent Changes
- **2025-11-22**: Initial implementation of landing page with all three sections
- Generated high-resolution athlete images for hero and experience sections
- Configured premium typography system (Inter, Poppins)
- Implemented smooth scroll-snap navigation
- Created contact form with validation and backend integration
- Added parallax effects and scroll-based animations

## User Preferences
- Premium, luxury aesthetic inspired by Apple Fitness, Nike Running Club, Strava
- Cinematic, high-end visual treatment
- Smooth, polished animations and interactions
- Clean, minimalist design with generous whitespace
