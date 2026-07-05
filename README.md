# Understanding Router, Layout, Pages, and Components in React

Imagine you're building a movie booking website like **TheatreHub**.

When a user visits your website, React follows this flow:

```text
User Visits URL
       │
       ▼
     Router
       │
       ▼
     Layout
       │
       ▼
      Page
       │
       ▼
   Components
```

Let's understand each one.

---

# 1. Router

The **Router** decides **which page should be shown** based on the URL.

For example,

```text
/          → Home Page
/movies    → Movies Page
/profile   → Profile Page
/login     → Login Page
```

### Example

```jsx
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
```

When the user visits:

```text
http://localhost:5173/movies
```

React displays the **Movies** page.

---

# 2. Layout

A **Layout** contains everything that should appear on multiple pages.

Instead of writing the Navbar and Footer on every page, create one layout.

### Without Layout

```jsx
function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}
```

```jsx
function Movies() {
  return (
    <>
      <Navbar />
      <MoviesContent />
      <Footer />
    </>
  );
}
```

Notice how the Navbar and Footer are repeated.

### With Layout

```jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
```

`<Outlet />` is the place where React renders the current page.

If the user visits:

```text
/movies
```

React renders:

```text
Navbar
------------
Movies Page
------------
Footer
```

---

# 3. Pages

A **Page** is a complete screen that users visit.

Examples:

```text
Home
Movies
Movie Details
Profile
Login
```

Each page usually combines multiple components.

### Home.jsx

```jsx
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

function Home() {
  return (
    <>
      <Hero />
      <MovieList />
    </>
  );
}

export default Home;
```

The Home page doesn't create every UI element itself—it simply combines reusable components.

---

# 4. Components

Components are small, reusable pieces of the UI.

Examples:

```text
Navbar
Footer
Button
MovieCard
SearchBar
Loader
```

### Example

```jsx
function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieCard;
```

Now you can reuse it many times.

```jsx
<MovieCard movie={movie1} />
<MovieCard movie={movie2} />
<MovieCard movie={movie3} />
```

Write once, use everywhere.

---

# Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── MovieCard.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── Login.jsx
│   └── Profile.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── routes/
│   └── router.jsx
│
├── App.jsx
└── main.jsx
```

---

# Complete Flow

Suppose the user opens:

```text
http://localhost:5173/movies
```

### Step 1: Router

The router checks the URL.

```jsx
{
  path: "/movies",
  element: <Movies />
}
```

It decides to render the **Movies** page.

---

### Step 2: Layout

The router sees that the Movies page uses `MainLayout`.

```jsx
<Navbar />
<Outlet />
<Footer />
```

---

### Step 3: Page

Inside `<Outlet />`, React renders:

```jsx
<Movies />
```

---

### Step 4: Components

The Movies page displays reusable components.

```jsx
function Movies() {
  return (
    <>
      <SearchBar />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </>
  );
}
```

---

# Final Rendering

The browser finally displays:

```text
-------------------------
Navbar
-------------------------

Search Bar

Movie Card
Movie Card
Movie Card

-------------------------
Footer
-------------------------
```

---

# One-Line Summary

* **Router** → Decides **which page** to display based on the URL.
* **Layout** → Provides the **shared structure** (Navbar, Footer, Sidebar, etc.).
* **Page** → Represents a **complete screen** for a specific route.
* **Component** → A **reusable UI building block** used inside pages or layouts.

Together, they create a clean, scalable, and maintainable React application.
