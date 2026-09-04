# Session 4 — Rendering Arrays from Data

## What today covers

Practice turning arrays of data into rendered UI. Each array is a different
real-world scenario — students, products, movies, jobs, etc. By the end,
you'll be comfortable reading data from an array and displaying it on screen.

## Quick recap

| From | Concept |
|---|---|
| Session 1 | React renders JSX to the page; Vite runs the project |
| Session 2 | Components are functions; props pass data into them |
| Session 3 | `.map()` turns an array of data into a list of JSX elements |

## Setup

1. Create a new React app with Vite:

```bash
npm create vite@latest array-practice -- --template react
cd array-practice
npm install
```

2. Open the project in your editor.

3. Each folder in `classwork/` contains:
   - A **JS file** with the array data
   - An **index.html** with a card snippet and starter CSS

## What you'll do

1. Create a section component for each array inside `src/`:

```
src/
├── App.jsx
├── MoviesSection.jsx
├── JobsSection.jsx
├── StudentsSection.jsx
├── EmployeesSection.jsx
├── RestaurantsSection.jsx
├── PostsSection.jsx
├── CoursesSection.jsx
├── ProductsSection.jsx
├── PlayersSection.jsx
├── TodosSection.jsx
└── components/
    ├── MovieCard.jsx
    ├── JobCard.jsx
    ├── StudentCard.jsx
    ├── EmployeeCard.jsx
    ├── RestaurantCard.jsx
    ├── PostCard.jsx
    ├── CourseCard.jsx
    ├── ProductCard.jsx
    ├── PlayerCard.jsx
    └── TodoCard.jsx
```

2. Each **section component** owns its array, renders a container with
   a header, maps over the data, and passes each item to its card component.

3. `App.jsx` just imports and renders all section components.

## Example structure

```jsx
// components/MovieCard.jsx
function MovieCard({ title, genre, year, rating }) {
  return (
    <div className="card movie-card">
      <div className="title">{title}</div>
      <div className="genre-year">
        {genre} • {year}
      </div>
    </div>
  );
}

export default MovieCard;
```

```jsx
// MoviesSection.jsx
import MovieCard from "./components/MovieCard";

const movies = [
  { id: 1, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.7 },
  { id: 2, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
];

function MoviesSection() {
  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
```

```jsx
// App.jsx
import MoviesSection from "./MoviesSection";
import JobsSection from "./JobsSection";
import StudentsSection from "./StudentsSection";

function App() {
  return (
    <div>
      <MoviesSection />
      <JobsSection />
      <StudentsSection />
    </div>
  );
}

export default App;
```

## Classwork folders

| # | Folder | Fields | Array field |
|---|--------|--------|-------------|
| 01 | movies | 5 | — |
| 02 | jobs | 6 | — |
| 03 | students | 9 | `skills: []` |
| 04 | employees | 5 | — |
| 05 | restaurants | 6 | — |
| 06 | posts | 5 | — |
| 07 | courses | 5 | — |
| 08 | products | 8 | `tags: []` |
| 09 | players | 5 | — |
| 10 | todos | 3 | — |

Start with the easy ones (01, 02) and work your way up. The complex ones
(03, 08) have more fields and include array fields you'll need to render
as badges or tags.

## Checklist

- [ ] Each section component owns its array and renders a container + header
- [ ] Each card component receives a single item's data as props
- [ ] `.map()` is used inside the section to render a card for each item
- [ ] Every card has a unique `key` prop
- [ ] All fields from the data are displayed
- [ ] Array fields (skills, tags) render as badge/tag elements
- [ ] `App.jsx` only imports and renders section components
