# CIM Tree Knowledge Base - Design Guidelines

## Design Approach
**Reference-Based with Custom Aesthetic**: Modern gradient-based design inspired by contemporary SaaS applications, featuring a distinctive pink/purple color palette with smooth animations and dual theme support.

## Core Design Principles
1. **Gradient-Driven Aesthetics**: Liberal use of gradient overlays and backgrounds
2. **Interactive Depth**: Hover states with elevation and glow effects
3. **Theme Flexibility**: Seamless light/dark mode transitions
4. **Information Density**: Efficient card-based layouts for knowledge reference

## Typography
- **Headings**: Poppins (600-700 weight) for titles and section headers
- **Body**: Inter (300-600 weight) for all content, buttons, and UI elements
- **Hierarchy**:
  - H1: 2rem (mobile: 1.5rem) - Main page title with gradient text
  - H2: 1.875rem (mobile: 1.5rem) - Section titles
  - Body: 0.95rem - Card titles
  - Small: 0.875rem - Card content and descriptions
  - Micro: 0.8-0.85rem - Footer and metadata

## Color System

### Dark Theme (Default)
- **Backgrounds**: 
  - Primary: `#0f172a` (slate-900)
  - Secondary: `#1e293b` (slate-800)
  - Gradient overlay: `linear-gradient(135deg, #0f172a 0%, #1a1f35 50%, #0a0f1f 100%)`
- **Accents**:
  - Primary Pink: `#ec4899` (for main interactive elements, topic cards)
  - Secondary Purple: `#a855f7` (for detail cards, secondary elements)
  - Gradient: `linear-gradient(135deg, #ec4899 0%, #a855f7 100%)`
- **Text**:
  - Primary: `#ffffff`
  - Secondary: `#cbd5e1` (slate-300)
  - Muted: `rgba(203, 213, 225, 0.5-0.6)`
- **Borders**: `rgba(236, 72, 153, 0.2)` with pink tint

### Light Theme
- **Backgrounds**:
  - Primary: `#f8fafc` (slate-50)
  - Secondary: `#ffffff`
  - Card: `#ffffff` with subtle shadow
- **Accents**: Same pink/purple but with adjusted opacity for contrast
- **Text**:
  - Primary: `#0f172a`
  - Secondary: `#475569`
  - Muted: `rgba(71, 85, 105, 0.6)`
- **Borders**: `rgba(236, 72, 153, 0.15)`

## Layout System

### Spacing Scale
Use Tailwind units: 2, 4, 8, 12, 16, 20, 24, 32, 48 for consistent rhythm

### Container Structure
- **Max Width**: 1200px for main content
- **Padding**: 
  - Desktop: 1.5rem (24px) horizontal
  - Mobile: 1rem (16px) horizontal
- **Section Spacing**: 3-4rem (48-64px) between major sections

### Grid Layouts
- **Detail Cards**: 3-column grid (1 on mobile)
  - `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`
- **Topic Cards**: 2-column grid (1 on mobile)
  - `grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))`
- **Gap**: 1rem between cards

## Component Design

### Navigation Bar
- **Position**: Sticky top with backdrop blur
- **Background**: `rgba(15, 23, 42, 0.8)` with blur(10px)
- **Border**: Bottom border with pink tint
- **Mobile**: Hamburger menu that collapses navigation
- **Theme Toggle**: Icon button (sun/moon) with smooth rotation animation

### Search Bar
- **Width**: Full width with icon inset on left
- **Height**: ~3.5rem with comfortable padding
- **Background**: Semi-transparent card background with backdrop blur
- **Border**: Pink accent on focus with glow effect
- **Icon**: Pink search icon positioned absolute left

### Card Components
- **Base Style**:
  - Gradient background overlay (dark → darker)
  - 1px border with pink/purple tint
  - Border radius: 0.75rem (12px)
  - Padding: 1.5rem (24px)
- **Hover State**:
  - Translate Y: -4px
  - Pink border intensifies
  - Gradient overlay fades in (pink → purple, 10% opacity)
  - Box shadow with pink glow: `0 20px 40px rgba(236, 72, 153, 0.15)`
- **Expanded State**:
  - Chevron rotates 180deg
  - Content slides down with fade-in animation
  - Top border separator for expanded content

### Detail Cards
- **Accent**: Purple chevron icon
- **Title**: Purple text (`#a855f7`)

### Topic Cards
- **Accent**: Pink chevron icon
- **Title**: Pink text (`#ec4899`)

### Footer
- **Background**: Semi-transparent with backdrop blur
- **Border**: Top border with pink tint
- **Content**: 
  - Centered layout
  - "Made by: Mo'men Kelany" with pink accent on name
  - "All rights reserved © 2024" in muted text
  - Version number in smaller muted text

## Animations & Interactions

### Transition Timing
- **Standard**: 0.3s ease for most interactions
- **Quick**: 0.2s ease for small hover effects
- **Smooth**: cubic-bezier for complex animations

### Key Animations
- **Card Hover**: Transform translateY + shadow + border glow
- **Expand/Collapse**: SlideDown with opacity fade (0.3s)
- **Theme Toggle**: Rotate icon 180deg + color transitions
- **Chevron**: Rotate 180deg on expand
- **Search Focus**: Border glow with shadow pulse

### Gradient Overlays
- **Before pseudo-element** on cards with pink→purple gradient
- **Opacity 0 → 1** on hover
- Always behind content (z-index management)

## Responsive Behavior

### Breakpoints
- **Mobile**: < 768px (single column, collapsed nav)
- **Desktop**: ≥ 768px (multi-column grids, full nav)

### Mobile Adaptations
- Reduce font sizes by ~20%
- Single column card layouts
- Hamburger navigation menu
- Reduced padding and spacing
- Touch-friendly interactive areas (min 44px)

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Focus states with visible outlines (pink accent)
- Sufficient color contrast in both themes
- Keyboard navigation support for all interactive elements

## Images
This is a text-heavy knowledge base application - **no hero images required**. The visual impact comes from gradient backgrounds, card interactions, and the pink/purple color system.