# SCSS Design System Documentation

this design system I designed are based on these resources:
**TOKEN DEISGN SYSTEM:** https://thedesignsystem.guide/start-here
**GOOGLE MATERIAL DESIGN:** https://m3.material.io/

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Tokens](#tokens)
4. [Utilities](#utilities)
5. [Responsive Design](#responsive-design)
6. [Theming](#theming)
7. [Best Practices](#best-practices)
8. [Performance Considerations](#performance-considerations)
9. [Debugging](#debugging)
10. [Extending the System](#extending-the-system)

## Introduction

This design system provides a comprehensive, modular approach to styling using modern Sass features. It's designed to ensure consistency, maintainability, and scalability across the application.

### Key Features

- **Token-based design**: All visual properties are derived from design tokens
- **Responsive by default**: Built-in fluid typography and spacing
- **Theme support**: Light, dark, and high-contrast themes
- **Performance optimized**: Caching mechanisms for token validation
- **Accessibility focused**: Tools for creating accessible interfaces

## Architecture

The design system follows a layered architecture:

```
src/lib/scss/design-system/
├── tokens/                 # Raw design values
│   ├── _primitive-*.scss   # Low-level design tokens
│   ├── mapped/            # Mapped token relationships
│   ├── alias/             # Semantic token mappings
│   │   └── themes/        # Theme system
├── utils/                  # Helper functions and mixins
├── responsive/             # Responsive design utilities
├── base/                   # Global styles and defaults
│   └── default-styles/     # Default element styling
└── main.scss               # Main entry point
```

### Import Order

The import order is crucial for proper dependency resolution:

1. Tokens: Raw design values (colors, typography, spacing)
2. Utils: Helper functions and mixins that depend on tokens
3. Responsive: Layout and responsive utilities
4. Base: Global styles and default element styling

## Tokens

Tokens are the foundation of the design system, representing raw design values.

### Primitive Tokens

Primitive tokens are the lowest level of the system and represent raw values:

```scss
// Example from _primitive-colors.scss
$color-blue: (
	50: #e3f2fd,
	100: #bbdefb // ... more values
);
```

### Semantic Tokens

Semantic tokens map primitive tokens to their usage context:

```scss
// Example from _alias-colors.scss
$primary: (
	'lightest': map.get($color-blue, 50),
	'light': map.get($color-blue, 100),
	'default': map.get($color-blue, 500) // ... more mappings
);
```

### Using Tokens

Always use tokens through the provided functions to ensure validation and proper theming:

```scss
@use '../lib/scss/design-system/tokens';

.element {
	color: tokens.theme('text', 'primary');
	background-color: tokens.theme('background', 'primary');
	padding: tokens.spacing('md');
}
```

## Utilities

The utilities module provides helper functions and mixins for common tasks.

### Functions

Functions help with calculations, transformations, and value retrieval:

```scss
// Convert pixels to rem
.element {
	font-size: utils.px-to-rem(16); // Outputs: 1rem
}

// Safe map access
$value: utils.map-deep-get($theme, 'colors', 'primary');
```

### Mixins

Mixins provide reusable style patterns:

```scss
.card {
	@include utils.flex-column;
	@include utils.focus-ring;
}

.title {
	@include utils.heading(2);
}
```

## Responsive Design

The responsive module provides tools for creating adaptive layouts.

### Breakpoints

```scss
.element {
	@include responsive.media-breakpoint-up('md') {
		// Styles for medium screens and up
	}
}
```

### Fluid Typography

```scss
.title {
	@include responsive.fluid-typography(1.5rem, 3rem);
}

// Or use the predefined mixins
.heading {
	@include responsive.responsive-heading(1); // h1 size
}

.body-text {
	@include responsive.responsive-body('md'); // Medium body text
}
```

### Grid System

```scss
.container {
	@include responsive.grid-container;
}

.grid {
	@include responsive.grid(12, 1rem);
}

.grid-item {
	@include responsive.grid-item(4, 12); // 4 columns in a 12-column grid
}

// Auto-fit grid for cards
.card-grid {
	@include responsive.auto-grid(250px, 1rem);
}
```

## Theming

The design system supports light, dark, and high-contrast themes out of the box.

### Using Theme Values

```scss
.element {
	color: theme('text', 'primary');
	background-color: theme('background', 'secondary');
}
```

### Creating Theme-Aware Components

```scss
.custom-element {
	@include themes.apply-adaptive-color('color', 'text', 'primary');
	@include themes.apply-adaptive-color('background-color', 'background', 'secondary');
}

// With explicit values
.special-element {
	@include themes.apply-adaptive-value('border-color', #ccc, #333, #fff);
}
```

### Creating Custom Themes

```scss
// Register a new theme
$my-custom-theme: (
	'background': (
		'primary': #f0f8ff,
		// ... more values
	) // ... more categories
);

@include themes.register-theme('custom', $my-custom-theme);
```

## Best Practices

1. **Always use tokens instead of hard-coded values**

   ```scss
   // Good
   color: theme('text', 'primary');

   // Bad
   color: #333;
   ```

2. **Leverage the utility functions and mixins**

   ```scss
   // Good
   @include flex-column;

   // Bad
   display: flex;
   flex-direction: column;
   ```

3. **Use the responsive system for consistent breakpoints**

   ```scss
   // Good
   @include media-breakpoint-up('md') { ... }

   // Bad
   @media (min-width: 768px) { ... }
   ```

4. **Follow the established naming conventions**

   - Use kebab-case for variables and mixins
   - Use Capital Letters for const values.
   - Use descriptive names that indicate purpose
   - Prefix private variables with underscorre

5. **Ensure all components support both light and dark themes**

   ```scss
   // Good
   color: theme('text', 'primary');

   // Bad
   color: $text-color;
   ```

## Performance Considerations

- **Token Caching**: The design system caches token validation to improve performance
- **CSS Variables**: Uses CSS custom properties for efficient theme switching
- **Module System**: Leverages Sass modules to avoid duplicate code
- **Minimal Output**: Generates only the CSS needed for the components used

## Debugging

The design system includes robust error handling to help debug issues:

- **Validation**: Tokens are validated to ensure they exist
- **Error Messages**: Descriptive error messages point to the source of problems
- **Fallbacks**: Critical functions include fallback values for graceful degradation
- **Similar Key Suggestions**: When a token is not found, the system suggests similar tokens

Example error:

```
Error: Key 'primery' not found in colors map. Did you mean one of these? primary, primer?
```

## Extending the System

### Adding New Tokens

1. Add primitive tokens in the appropriate file (e.g., `_primitive-colors.scss`)
2. Create semantic mappings in the alias files (e.g., `_alias-colors.scss`)
3. Update themes if necessary

### Creating New Utilities

1. Identify common patterns in your codebase
2. Create reusable mixins or functions in the appropriate utils file
3. Document usage with examples

### Adding New Themes

1. Create a new theme map following the existing theme structure
2. Register the theme using `register-theme()`
3. Apply theme-specific styles using `apply-theme()`

## Contributing

When contributing to the design system:

1. Follow the existing architecture and naming conventions
2. Ensure backward compatibility
3. Add proper documentation and examples
4. Test across different browsers and screen sizes
5. Run linting and validation before submitting changes
