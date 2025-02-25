# SCSS Design System

A comprehensive, modular design system using modern Sass features.

## Structure

- **tokens/**: Raw design values (colors, typography, spacing)
  - **primitive-\*.scss**: Low-level design tokens
  - **alias/**: Semantic mappings of primitive tokens
    - **themes/**: Theme system implementation
- **utils/**: Helper functions and mixins

  - **utils-functions.scss**: Utility functions
  - **utils-mixins.scss**: Common mixins for layout, typography, etc.
  - **utils-accessibility.scss**: Accessibility-focused utilities

- **responsive/**: Responsive design utilities

  - **responsive-breakpoints.scss**: Breakpoint definitions
  - **responsive-typography.scss**: Fluid typography system
  - **responsive-spacing.scss**: Responsive spacing utilities
  - **responsive-grid.scss**: Grid system

- **base/**: Global styles and defaults
  - **global-reset.scss**: Normalized baseline styles
  - **default-styles/**: Default element styling

## Usage

### Importing

```scss
// Import everything
@use '../lib/scss/design-system/main';

// Or import specific modules
@use '../lib/scss/design-system/tokens';
@use '../lib/scss/design-system/utils';
```

### Working with Tokens

```scss
@use '../lib/scss/design-system/tokens';

.element {
	// Use color tokens
	color: tokens.theme('text', 'primary');
	background-color: tokens.theme('background', 'primary');

	// Use spacing tokens
	padding: tokens.spacing('md');
	margin-bottom: tokens.spacing('lg');
}
```

### Using Mixins

```scss
@use '../lib/scss/design-system/utils';

.card {
	@include utils.flex-column;
	@include utils.focus-ring;

	&__title {
		@include utils.heading(2);
	}

	&__content {
		@include utils.body-text('medium');
	}
}
```

### Responsive Design

```scss
@use '../lib/scss/design-system/responsive';

.container {
	@include responsive.container;

	@include responsive.media-breakpoint-up('md') {
		// Styles for medium screens and up
	}
}

.title {
	@include responsive.fluid-type(1.5rem, 3rem);
}
```

### Theming

The design system supports light and dark themes out of the box:

```scss
@use '../lib/scss/design-system/tokens/alias/themes/themes' as themes;

.custom-element {
	@include themes.adaptive-color('color', 'text', 'primary');
	@include themes.adaptive-color('background-color', 'background', 'secondary');
}
```

## Best Practices

1. Always use tokens instead of hard-coded values
2. Leverage the utility functions and mixins
3. Use the responsive system for consistent breakpoints
4. Follow the established naming conventions
5. Ensure all components support both light and dark themes

## Performance Considerations

- The design system uses CSS variables for theming to minimize style recalculation
- Token validation is cached to improve performance
- Follow the import structure to minimize duplicate code
