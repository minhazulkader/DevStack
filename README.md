# Dev Stack

Curated tools, technologies, and resources for developers building modern software.

## 🚀 Technologies Used
- **React** (Vite)
- **Tailwind CSS**
- **TypeScript / JSX**

## ✨ Key Features
1. **Fully Responsive Layout**: Adaptive multi-column grid architecture across mobile, tablet, and desktop viewports (Header, Hero, Technologies, Footer).
2. **Interactive Mobile Navigation**: Dynamic hamburger-to-close toggle menu with state-driven icon transitions.
3. **Modern UI/UX**: Clean micro-interactions, custom accent colors (`#D91B7E`), and accessible component hierarchy.

---

## 🧠 React Q&A

### i. What is JSX, and why is it used in React?
**Answer**: JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript. It makes UI code intuitive, readable, and allows combining component logic and template structure in one place.

### ii. What is the difference between props and state?
**Answer**: 
- **Props**: Immutable data passed down from a parent component to a child.
- **State**: Mutable, internal data managed directly within a component that triggers re-renders when updated.

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer**: `useState` allows functional components to track reactive state variables. Used in `Header` (`isMenuOpen`) to toggle the mobile dropdown menu and switch the hamburger icon to an "X" close button.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer**: `useEffect` synchronizes a component with external systems or side effects (data fetching, subscriptions). *(If fetching JSON data, it prevents infinite re-render loops by running API calls inside the effect and updating state once on mount).*

### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer**: Keys give React a reliable identity for each element in a list, optimizing the virtual DOM diffing/reconciliation algorithm to update, add, or remove items efficiently without losing component state.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer**: Conditional rendering is rendering UI elements dynamically based on boolean conditions.
*Used in `Header.tsx` for the mobile navigation drawer*:
```tsx
{isMenuOpen && (
    <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 ...">
        {/* mobile menu items */}
    </div>
)}
