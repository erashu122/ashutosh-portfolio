# Dev Portfolio — Ashutosh Kumar Pandit

A modern, dark-themed portfolio for a full-stack software engineer, built with React + Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Tech Stack
- **React 18 + Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling with custom design tokens (deep near-black base, electric violet + mint accents)
- **Framer Motion** — scroll-triggered reveals, layout animations, micro-interactions
- **Lucide React** — icon set

## Project Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js                 # all editable content lives here
    └── components/
        ├── Navbar.jsx           # sticky glass nav with scroll-spy
        ├── Hero.jsx              # headline, typing animation, CTAs
        ├── TypingRoles.jsx       # reusable typing-effect hook/component
        ├── About.jsx             # terminal panel + skills grid
        ├── Projects.jsx          # project grid + ProjectCard
        ├── Experience.jsx        # vertical timeline
        ├── Contact.jsx           # validated form + direct links
        └── Footer.jsx
```

## Setup
```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
npm run preview     # preview the production build
```

## Customizing Content
Everything text-based — name, bio, roles, skills, projects, experience, social links — lives in **`src/data.js`**. Edit that file and the whole site updates; no need to touch component markup for routine content changes.

## Design Notes
- **Palette:** near-black base (`#08080C`–`#17171F`), electric violet (`#8B6CF6`) as primary accent, mint green (`#39E2A4`) as a secondary signal color (used for status indicators, success states, alternating accents).
- **Type:** Space Grotesk for display/headings, Inter for body copy, JetBrains Mono for code/terminal-style UI (role typing, the "whoami" and `const engineer = {}` panels).
- **Signature element:** the terminal-style panels in the Hero and About sections, reinforcing the "developer" identity rather than relying on generic stat blocks.
- Respects `prefers-reduced-motion`, has visible focus rings, and uses semantic landmarks (`header`, `main`, `section`, `footer`) with `aria-label`s for screen readers.

## Wiring up the contact form
The form in `Contact.jsx` currently simulates a submit with a `setTimeout`. To make it functional, replace that block with a call to your backend, a service like Formspree/Resend, or a serverless function — the validation and UI states are already wired up.

## Replacing image placeholders
Profile photo: swap the terminal panel in `Hero.jsx`/`About.jsx` for an `<img>` tag, or keep both side by side.
Project thumbnails: replace the `FolderGit2` placeholder block in `Projects.jsx`'s `ProjectCard` with an `<img src={project.image} />`.
