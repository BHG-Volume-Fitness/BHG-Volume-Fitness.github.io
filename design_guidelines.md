# Volume Fitness Landing Page - Design Guidelines

## Design Approach
**Reference-Based**: Inspired by Apple Fitness, Nike Running Club, and Strava premium styling - focusing on cinematic, luxury fitness aesthetics with clean typography and high-impact imagery.

## Core Design Principles
- **Premium Luxury Aesthetic**: High-end, cinematic, athlete-focused visual treatment
- **Full-Screen Impact**: Each section occupies full viewport height for immersive storytelling
- **Smooth Motion**: Parallax effects, scroll-snapping, and fade-in animations create fluidity
- **Minimalist Clarity**: Clean layouts with generous whitespace and elegant typography

## Typography
- **Font Stack**: Google Fonts - Inter, Poppins, or SF Pro alternatives
- **Hierarchy**:
  - Hero Title: Bold, large-scale, luxury weight
  - Subtitles: Medium weight, refined spacing
  - Body Text: Clean, elegant line height (1.6-1.8) for readability
- **Treatment**: White text on dark/image backgrounds with soft shadows for depth

## Layout System
- **Spacing**: Use generous padding (py-16 to py-24 on desktop, py-8 to py-12 on mobile)
- **Section Structure**: Three full-screen sections with scroll-snap behavior
- **Grid System**: Two-column layout in Section 2 (logo + content), centered single-column elsewhere

## Section Breakdown

### Section 1: Hero/Intro
- **Background**: Full-screen high-resolution image of athletes jogging in open-wood marathon environment
- **Content**: Centered text with fade-in animation
  - Title: "Volume Fitness"
  - Subtitle: "Your favorite songs, re-mixed by AI, to match every peak, sprint, and finish line."
- **Effects**: Slight parallax movement on background image during scroll

### Section 2: Experience Explanation
- **Background**: Full-screen image of athletes getting ready to run with light parallax effect
- **Layout**: Two-column (50/50 or 40/60 split)
  - One side: Volume Fitness logo (placeholder)
  - Opposite side: Detailed description text with soft fade/slide animation on scroll
- **Content Box**: Translucent dark overlay behind text for readability
- **Animation**: Fade-in with subtle upward motion triggered on scroll

### Section 3: Contact Form
- **Background**: Solid black or dark gradient for premium contrast
- **Content**:
  - Title: "Interested in working together?"
  - Subtitle: "Fill out some info and we will be in touch shortly. We can't wait to hear from you!"
  - Form Fields: Name, Email, Company, Message
  - CTA Button: "Send"
- **Form Design**: 
  - Centered on screen
  - Rounded input fields with soft glow on focus
  - White text on dark background
  - Minimalistic luxury aesthetic
  - Smooth hover effects on button

## Component Library

### Form Elements
- Rounded input fields with subtle borders
- Focus state: Soft glow effect
- Button: Premium styling with smooth hover transitions
- All fields full-width within container

### Animations
- Scroll-based parallax on background images
- Intersection Observer triggers for fade-in effects
- Subtle slide-up motion for text blocks (20-30px)
- Smooth scroll-snap transitions between sections

## Images
**Hero Image**: Full-screen athletes jogging in open-wood marathon environment (cinematic, high-energy)
**Section 2 Image**: Athletes getting ready to run (preparatory, focused moment)
**Note**: All images should be high-resolution, cinematic quality with athletic focus

## Responsive Behavior
- Mobile: Stack two-column layouts to single column
- Maintain full-screen section heights on all devices
- Adjust typography scale for smaller viewports
- Preserve scroll-snap functionality across breakpoints

## Technical Interactions
- Vertical scroll-snap between sections for cinematic transitions
- Form validation on submit
- Smooth scrolling behavior throughout
- Parallax depth on background images (subtle, 0.5x scroll speed)