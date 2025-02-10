# Web Freelancer Site

A modern web application built with SvelteKit and a comprehensive SCSS design system.

## Table of Contents

- [Getting Started](#getting-started)
  - [Development Setup](#development-setup)
  - [Building for Production](#building-for-production)
- [SCSS Design System](#scss-design-system)
  - [Core Modules](#core-modules)
  - [Directory Structure](#directory-structure)
  - [Usage Guide](#usage-guide)

## Getting Started

### Development Setup

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building for Production

Create a production version of your app:

```bash
npm run build
```

Preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## SCSS Design System

Our design system provides a robust foundation for consistent, maintainable, and responsive styling using SCSS.

### Core Modules

#### 1. Colors

- Light and dark mode color scales
- Typography color system
- Color functions for theme switching
- Standardized opacity values

```scss
// Example usage
@use 'colors' as *;
.element {
	color: get-typography-color('primary');
	background: get-light-dark($light-color, $dark-color);
}
```

#### 2. Spacing

- Base unit: 0.25rem
- Static and responsive spacing scales
- Convenient mixins for padding, margin, and gap

```scss
// Example usage
@use 'spacing' as *;
.element {
	@include apply-padding(4);
	@include apply-margin(2, 'block');
	@include apply-gap(3);
}
```

#### 3. Typography

- Responsive font sizing system
- Semantic text styles
- Global typography classes
- Maximum character width controls

```scss
// Example usage
.heading {
	@extend %global__heading--h1;
	@include max-ch-inline-size('heading');
}
```

#### 4. Themes

- System preference detection
- Manual theme switching support
- Consistent theming across components

```scss
// Example usage
.element {
	@include theme('light') {
		background-color: white;
	}
	@include theme('dark') {
		background-color: black;
	}
}
```

### Directory Structure

```
src/lib/scss/
├── abstracts/
│   ├── colors/
│   ├── spacing/
│   ├── typography/
│   ├── themes/
│   ├── math/
│   └── utils/
├── base/
│   └── animations/
└── main.scss
```

### Usage Guide

1. **Import Base Styles**

   - Import `main.scss` in your root layout file
   - All global styles and utilities will be available

2. **Using Typography**

   - Extend global classes for consistent text styling
   - Use responsive font sizes for fluid typography

3. **Spacing System**

   - Use spacing mixins for consistent layout
   - Leverage the responsive spacing system for adaptive designs

4. **Theming**

   - Implement themes using the theme mixin
   - Colors automatically adjust based on theme

5. **Animations**
   - Import and use pre-built animations for entrances, exits, and hover effects

For detailed documentation and examples, see `src/Design System.MD`.
