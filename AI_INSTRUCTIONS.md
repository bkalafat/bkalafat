# AI Project Context Instructions

**Project Name:** bkalafat.com (Personal Portfolio Hub)  
**Type:** Single Page Application (React + Vite)  
**Purpose:** A central hub for the user's projects (DiffHub, TechNews) and professional identity (CV/Resume).

---

## 1. Technology Stack
- **Framework:** React 18+ (Vite).
- **Language:** JavaScript (ES6+).
- **Styling:** Vanilla CSS 3 with CSS Variables (Custom Properties).
  - *Note:* No Tailwind, No Bootstrap, No Styled-Components. Pure CSS is preferred.
- **Transpiler/Bundler:** Vite.
- **Fonts:** Inter (UI), JetBrains Mono (code/accents).

---

## 2. Theme System (IMPORTANT!)

The project uses a **modular CSS theme system** located in `src/themes.css`.

### How to Switch Themes
1. Open `index.html`.
2. Find `<html lang="en" data-theme="navy-neon">`.
3. Change `data-theme` to one of the available themes.

### Available Themes
| Theme Name     | Description                                    |
|----------------|------------------------------------------------|
| `navy-neon`    | Deep navy blue + bright green accent (Default)|
| `minimal-mono` | Monochromatic gray/charcoal (Professional)    |
| `warm-sunset`  | Warm tones with coral accents (Creative)      |
| `apple-dark`   | True black Apple-style                        |
| `dracula`      | Popular code editor theme (Purple accents)    |

### Theme Variables
All themes define these CSS variables:
```css
--bg-dark          /* Main background */
--bg-panel         /* Card/panel background */
--bg-panel-hover   /* Hover state */
--color-text       /* Primary text */
--color-text-sec   /* Secondary/muted text */
--color-accent     /* Accent color (links, highlights) */
--border-subtle    /* Subtle borders */
--backdrop-blur    /* Glassmorphism blur amount */
--radius-lg        /* Large border radius */
--radius-md        /* Medium border radius */
--glow-accent      /* Optional glow effect */
```

---

## 3. Project Structure
```text
/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── components/      # All UI components
│   │   ├── BentoGrid.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── ProjectCard.jsx/css
│   │   └── Footer.jsx/css
│   ├── themes.css       # 🎨 THEME DEFINITIONS (edit here to add themes)
│   ├── index.css        # Global styles and utilities
│   ├── App.jsx          # Main entry component
│   └── main.jsx         # React DOM root
├── index.html           # HTML entry (set data-theme here)
└── AI_INSTRUCTIONS.md   # This file
```

---

## 4. Coding Conventions
- **Components:** Functional components. Each has its own `.jsx` and `.css`.
- **CSS:** ALWAYS use CSS variables from `themes.css`. Never hardcode colors.
- **Icons:** Using text/emoji icons or simple CSS. Avoid heavy icon libraries.
- **Responsiveness:** Standard breakpoint at `768px`.
- **Animations:** Use utility classes `.animate-fade-in`, `.animate-slide-up`.

---

## 5. Common AI Tasks

### Adding a Theme
1. Open `src/themes.css`.
2. Add a new `[data-theme="your-theme-name"]` block with all variables.
3. Update `index.html` to use the new theme.

### Adding a Project Card
Add an entry to the grid in `src/components/BentoGrid.jsx`.

### Changing Accent Color
Edit `--color-accent` in the active theme block in `themes.css`.

---

*Use this file to instantly understand the context, theming, and constraints of the codebase.*
