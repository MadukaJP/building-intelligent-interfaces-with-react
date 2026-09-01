# Session 2 Assignment — Photography Business Landing Page

**Time estimate:** 45–60 minutes

**New project:** Yes — create a fresh Vite + React application.

## Task

### 1. Build a Photography Business Landing Page

For this assignment, you will build a landing page for a **photography business**.

You can decide the name and style of the photography brand. For example, the business could focus on:

- Wedding photography
- Portrait photography
- Fashion photography
- Event photography
- Nature photography
- Product photography

---

### 2. Create a New React Project

Create a new project using Vite:

```bash
npm create vite@latest photography-landing-page -- --template react
```

Install the dependencies and start the development server.

---

### 3. Build the Landing Page Using Components

Instead of writing the entire landing page inside `App.jsx`, divide the page into separate components.

Your landing page should have the following components:

- `Navbar`
- `Hero`
- `About`
- `Services`
- `Gallery`
- `Contact`
- `Footer`

Each component should represent a different section of the landing page.

For example:

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Gallery.jsx
    Contact.jsx
    Footer.jsx

  App.jsx
```

---

### 4. Render the Components in `App.jsx`

Your `App.jsx` should bring all the sections together.

For example:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
```

The goal is to understand how a React application can be divided into smaller components.

---

## Requirements

Your photography landing page must:

- Be built with React.
- Have a name for the photography business.
- Have at least 5 different sections.
- Use a separate component for each major section.
- Render all components inside `App.jsx`.
- Include content relevant to a photography business.
- Have basic CSS styling.
- Be responsive enough to work on both desktop and mobile screens.

---

## What "Done" Looks Like

A complete photography business landing page where the different sections are separated into React components.

For example:

```text
App
 ├── Navbar
 ├── Hero
 ├── About
 ├── Services
 ├── Gallery
 ├── Contact
 └── Footer
```

The purpose of this assignment is to practice **React components and component organization**.

Instead of building everything inside one large `App.jsx` file, each major section of the landing page should have its own component.

---

## Before Session 3: Quick Look Ahead

Before the next session:

- Try creating an array of objects in JavaScript.
- Each object can represent a photography service or gallery item.

For example:

```js
const services = [
  {
    name: "Wedding Photography",
    price: 150000
  },
  {
    name: "Portrait Photography",
    price: 50000
  },
  {
    name: "Event Photography",
    price: 100000
  }
];
```

Look up what `.map()` does on an array and try using it to log each service name to the console.

In Session 3, we will use arrays and `.map()` to dynamically render multiple components in React.