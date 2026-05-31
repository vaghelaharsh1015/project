# Pet Shop React App

A modern React-based pet shop application converted from HTML/CSS to React components with routing support. Displays exact same output as the original HTML/CSS version.

## Features

- **Responsive Design**: Mobile-friendly layout using Bootstrap
- **Component-based Architecture**: Reusable React components for easy maintenance
- **Multiple Pages**: Home page and Shop page with React Router
- **Modern Styling**: CSS Modules for scoped styling
- **Complete Sections**:
  - Top Bar with contact info and social links
  - Navigation menu
  - Hero banner
  - Welcome section with features
  - Services showcase (What We Do)
  - Product catalog with category filters
  - Features/Benefits section
  - Gallery with image grid
  - Testimonials carousel
  - Blog posts section

## Project Structure

```
src/
├── components/
│   ├── TopBar.jsx              # Top navigation with contact info
│   ├── Navigation.jsx          # Main navigation menu
│   ├── Hero.jsx                # Hero section with call-to-action
│   ├── Welcome.jsx             # Welcome section with features
│   ├── WhatWeDo.jsx            # Services section
│   ├── Shop.jsx                # Product catalog section
│   ├── Features.jsx            # Benefits section
│   ├── Gallery.jsx             # Image gallery
│   ├── Testimonials.jsx        # Customer testimonials carousel
│   └── Blog.jsx                # Blog posts section
├── pages/
│   ├── Home.jsx                # Home page with all sections
│   └── ShopPage.jsx            # Dedicated shop page
├── styles/
│   ├── TopBar.module.css
│   ├── Navigation.module.css
│   ├── Hero.module.css
│   ├── Welcome.module.css
│   ├── WhatWeDo.module.css
│   ├── Shop.module.css
│   ├── Features.module.css
│   ├── Gallery.module.css
│   ├── Testimonials.module.css
│   └── Blog.module.css
├── App.jsx                     # Main app with routing
├── index.css                   # Global styles
└── main.jsx                    # React entry point
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Dependencies

- React 18.2.0
- React Router DOM 6.0.0
- Bootstrap 5.3.2
- Font Awesome 6.5.0
- Vite 5.0.8

## Pages

### Home Page (`/`)
Displays all sections in order:
- Top Bar
- Navigation
- Hero Section
- Welcome Section
- Services (What We Do)
- Product Shop
- Features/Benefits
- Gallery
- Testimonials
- Blog Posts

### Shop Page (`/shop`)
- Product catalog with category filtering
- Product cards with pricing and actions
- Sale badges and sold-out indicators

## Styling

All CSS is modularized using CSS Modules to ensure component isolation and prevent style conflicts. The styling exactly matches the original HTML/CSS version with:
- Bootstrap grid system
- Custom color scheme (#26c0f0 cyan, #8dc63f green)
- Responsive breakpoints
- Hover effects and transitions
- Flexbox and Grid layouts

## Notes

- All images are linked from external CDN (htmlbeans.com and unsplash.com)
- SVG icons used for decorative elements
- Font Awesome icons for interactive elements
- Poppins font family for consistent typography

