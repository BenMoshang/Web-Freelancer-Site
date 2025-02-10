## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Core Modules](#core-modules)
  - [Colors](#colors)
  - [Spacing](#spacing)
  - [Typography](#typography)
  - [Themes](#themes)
  - [Math & Responsiveness](#math--responsiveness)
  - [Utils & Mixins](#utils--mixins)
  - [Animations](#animations)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Learning More](#learning-more)

---

## Introduction

The design system provides a set of standardized styles and utilities using SCSS. It defines colors, spacing, typography, themes, animations, and more so that developers can build UIs that are both consistent and responsive.

This document is meant for developers who are new to the codebase. It simplifies the understanding of the key parts of the design system and how to use them.

## Core Modules

### Colors

- **Variables & Scales:**

  LIGHTMODE:
  `$light-scale`
  DARKMODE:
  `$dark-scale`
  Typography:
  `$typography-color`

- **Functions:**
  `get-light-dark($light-color, $dark-color, $light-opacity: 1, $dark-opacity: 1)`
  GET BOTH THEMES:
  has extra parameters for opacities.

  `get-color($color, $scale: 'dark')`
  GET SINGULAR COLOR:
  selects a color from the chosen scale.

- **IMPORTANT NOTES**
  !!!`$typography-color`
  `get-typography-color($key)`
- opacities are STANDARDIZED. Use the map
  @param: `primary`
  @param: `secondary`
  @param: `tertiary`

### Spacing

- **Base Unit:**  
  The base unit is defined as `0.25rem` (which is roughly 4px). Other spacing values are multiples of this unit.

- **Variables & Scales:**
  `$base-spacing-scale`
  `$static-spacing`
  `$responsive-spacing`

- **FUNCTIONS:**
  `create-responsive-sp`(only for niche custom use)
  `get-static-sp`
  `get-responsive-sp`

- **SPACING MIXINS**
  MIXINS TO USE:
  ($size, $type, $static: false)
  `@mixin apply-padding.`
  `@mixin apply-margin`

($size, $static: false)
`@mixin apply-gap`

---

### Typography

- **Base Scale**  
   `$base-typography-scale`
- **Scales & Dictionaries**
  `$responsive-font-sizes`

- **MAIN STYLES**
  TYPOGRAPHY STYLES:
  `%global__{type}--{semantic}`
  _Usage Example:_
  @extend %global\_\_{type}--{semantic};
  {type} -> {label, body, heading, display}
  {display, heading} -> {h1, h2,h3}
  {body} -> {lg, md}

  **Functions**
  helper:
  `get-static-fsz($size)`
  `create-responsive-fsz($min-key, $max-key)`

- **MIXINS**
  `@max-ch-inline-size($type)`(THIS IS TO SET PARAGRAPH SIZES ex: 65ch)

- **CUSTOM NICHE STYLE BASES**

  `display-overview`,
  `heading-overview`,
  `body-overview`,
  `label-overview`
  TYPOGRAPHY BASES:
  (if you want to make your own %placeholder class these are that bases to apply)

  _Usage Example:_
  h1 {
  @include display-overview;
  font-size: map.get($responsive-font-sizes, 'display--h1');
  }

---

### Themes

- **Theme Mixin:**  
  The `theme($name)` mixin helps in applying styles based on the chosen color mode. It supports both the system preference (using media queries) and explicit selection via a `data-theme` attribute on `<html>`.

_Usage Example:_
.my-element {
background-color: black;
@include theme('light') {
background-color: white;
}
@include theme('dark') {
background-color: black;
}
}

---

### Math & Responsiveness

- **Math Helpers:**  
  Functions like `round-number()` and `create-clamp()` help in creating fluid values for typography and spacing.

- **Map Access:**  
  `get-map-value($map, $key)` is used frequently to safely retrieve values from Sass maps.

---

### Utils & Mixins

The utils folder contains various helper mixins that simplify common layout patterns:

- **Flexbox Helpers:** `flex-center`, `flex-between`, `flex-column`, etc.
- **Section Base:** A mixin to quickly set up a section with padding, grid item settings, and theming applied.
- **Page Grid:** Provides a responsive grid system using media queries for mobile, tablet, and desktop breakpoints.

_Usage Example:_
.section {
@include section-base('light');
}

---

## Folder Structure

The codebase is organized into several folders under `src/lib/scss/abstracts/` and `src/lib/scss/base/`. Here are the main parts:

- **Colors**

  - Variables: `colors/_colors-variables.scss`
  - Functions: `colors/_colors-functions.scss`
  - Index: `colors/_index.scss`

- **Spacing**

  - Base units and scale: `spacing/_spacing-base.scss`
  - Functions & styles: `spacing/_spacing-functions.scss` and `spacing/_spacing-styles.scss`
  - Grid system: `spacing/page/_page-grid.scss`
  - Index: `spacing/_index.scss`

- **Typography**

  - Font faces: `typography/_typography-font-face.scss`
  - Font sizes: `typography/_typography-font-size.scss`
  - Functions and variables: `typography/_typography-functions.scss` and `typography/_typography-variables.scss`
  - Styles & gradients: `typography/_typography-styles.scss`, `typography/_typography-gradient.scss`
  - Index: `typography/_index.scss`

- **Themes**

  - Theme mixins for light and dark modes: `themes/_themes.scss`
  - Index: `themes/_index.scss`

- **Math & Responsiveness**

  - Math utilities (e.g., rounding numbers and creating fluid values): `math/_responsive-functions.scss`
  - Index: `math/_index.scss`

- **Utils & Mixins**

  - Helper mixins for flexbox, grid items, section background, etc.: `utils/_utils-mixins.scss`
  - Index: `utils/_index.scss`

- **Animations**
  - Entrance, exit, and hover animations are in separate folders under `base/animations/`
  - Example files: `animations/entrance/_entrance-animations.scss`, `animations/exit/_exit-animations.scss`, and `animations/hover/_hover-animations.scss`

---

---
