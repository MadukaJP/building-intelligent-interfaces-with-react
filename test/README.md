# React Live Class Test: Assessment Guide

**Time:** 60 minutes  
**Format:** Build from scratch (No API)  
**Goal:** Build a Student Manager CRUD app using Vite, React, components, props, events, and state.

---

## 1. What You Need to Build

You will build a **Student Manager** where users can:
*   **Create:** Add a new student record.
*   **Read:** Display all students.
*   **Update:** Edit an existing student's info.
*   **Delete:** Remove a student from the list.

Each student must store:
*   Name
*   Age
*   Course

---

## 2. Marking Rubric (Total: 80 Marks)

*   **Project Setup (5 Marks):** 
    *   Initialize React/Vite.
    *   Run app successfully.
    *   Organize into logical components.
*   **Display Students (15 Marks):** 
    *   Store students in state.
    *   Render using `.map()`.
    *   Create a reusable `StudentCard` component.
    *   Pass data via props and use proper `key` values.
*   **Create (15 Marks):** 
    *   Form with inputs for name, age, and course.
    *   Handle input changes with state (controlled inputs).
    *   Submit form, add student to list, and reset inputs.
*   **Update (15 Marks):** 
    *   Add an Edit button.
    *   Populate form with selected student data.
    *   Update the correct item in state.
*   **Delete (10 Marks):** 
    *   Add a Delete button.
    *   Remove the correct student and update UI immediately.
*   **React Fundamentals (20 Marks):** 
    *   Proper use of `useState`, event handling, `.map()` / conditional rendering, and component/prop structuring.

---

## 3. How to Prepare

1.  **Practice From Scratch:** Spin up a Vite project and build a basic list manager without looking at tutorials.
2.  **Master State & Forms:** Practice managing input values with `useState` and handling form submissions cleanly.
3.  **Review CRUD Logic:** Know how to use array methods (`.map()`, `.filter()`) to add, update, and delete items immutably in state.
4.  **Check Your Tools:** Ensure Node.js and your code editor are working properly before test day.