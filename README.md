# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Tenzies React Game – Final Project

Live site: [https://jessz0l0.github.io/Final_Project_Tenzies_DGMD_E_28](https://jessz0l0.github.io/Final_Project_Tenzies_DGMD_E_28)

---

## Project Objective

This project recreates the game **Tenzies** as a modern React Single Page Application (SPA). In Tenzies, players roll 10 dice until all show the same number. The player can hold dice between rolls to lock in desired values. This app builds on core React concepts and extends functionality with routing, persistent data storage, and modular component design.

---

## Requirements & Where They Were Met

| Requirement | How It Was Implemented |
|------------|------------------------|
| **Array** | The app manages an array of 10 dice objects (`useState`), each with a `value`, `isHeld`, and `id`. |
| **JSX Syntax** | All UI elements (dice, forms, buttons) are rendered using JSX throughout components. |
| **Form with Event** | The home page includes a form where the player enters their name. Submitting stores the name in `localStorage` and routes to the game. |
| **React Components** | The app is built using modular components: `App.jsx`, `GameApp.jsx`, `Die.jsx`, `Leaderboard.jsx`, `Form.jsx`, and more. |
| **React Modules** | Components are split into files and imported as modules where needed. |
| **React Hooks** | `useState` manages game state (dice, rolls, player name), and `useEffect` checks win conditions and updates scores. |
| **API or Storage Access** | `localStorage` is used to persist the best roll count and player name between sessions. |
| **React Routes** | React Router DOM manages navigation between `/`, `/game`, and `/leaderboard`. The `404.html` fallback ensures support on GitHub Pages. |

---

## Reflection

### What was the most satisfying part of this project?

The most satisfying part was getting the confetti animation and game logic working smoothly with state updates and win detection — seeing it come together felt like building a real app. It was also rewarding to create a deployable version that works across sessions.

---

### If I had two more weeks, I would...

- Add support for multiple players and a global leaderboard.
- Improve UI/UX with difficulty modes or dice animation.
- Store data in a backend database or Firebase instead of `localStorage`.

---

### What was the most useful thing we learned in this class?

The most useful takeaway was learning how to manage state and component logic cleanly in React — especially using hooks and routing. Understanding how to modularize and deploy a real application is an incredibly empowering skill to carry forward.

---

Thanks for checking out the project!
