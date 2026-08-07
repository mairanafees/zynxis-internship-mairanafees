## 🚀 Performance & Web Vitals

A performance-focused React.js frontend project developed as part of the **Zynxis Frontend Development Internship**.

The main objective of this task was to optimize a frontend application for speed, responsiveness, and a better user experience using modern web performance techniques and **Google Lighthouse**.

---

## 📌 Task Objective

**Performance & Web Vitals**

Optimize the frontend for speed by implementing:

* Image lazy loading
* Component lazy loading
* Code splitting
* Responsive design
* Optimized image rendering
* Lighthouse performance auditing
* Core Web Vitals optimization

---

## ✨ Features

* ⚡ React.js + Vite
* 📱 Fully responsive design
* 🖼️ Lazy loading for images
* 🔄 Lazy loading for React components
* 📦 Code splitting with dynamic imports
* ⏳ Suspense loading states
* 🚀 Production-optimized Vite build
* 🔍 SEO meta description
* 📊 Google Lighthouse audit
* 🎨 Modern dark/slate-grey UI

---

## ⚡ Performance Optimizations

### 1. Image Lazy Loading

Images that are not immediately visible are loaded only when they become relevant to the user.

```jsx
<img
  src={project.image}
  alt={project.title}
  loading="lazy"
  decoding="async"
/>
```

This helps reduce the amount of content loaded during the initial page load.

---

### 2. Component Lazy Loading

React's `lazy()` function is used to load non-critical components dynamically.

```jsx
const Projects = lazy(() => import("./components/Projects"));
```

This allows the application to split JavaScript into smaller chunks instead of loading every component immediately.

---

### 3. React Suspense

Lazy-loaded components use `Suspense` with a fallback loading state.

```jsx
<Suspense fallback={<LoadingSection />}>
  <Projects />
</Suspense>
```

This provides a smoother loading experience while components are being fetched.

---

### 4. Code Splitting

Dynamic imports allow Vite to generate separate JavaScript chunks for lazy-loaded components.

This reduces the initial JavaScript workload and improves page loading performance.

---

### 5. Responsive Design

The application has responsive layouts for:

* Desktop
* Tablet
* Mobile

CSS media queries are used to adapt the interface to different screen sizes.

---

### 6. Production Build

The application was tested using Vite's production build:

```bash
npm run build
```

The production preview can be started using:

```bash
npm run preview
```

---

## 📊 Lighthouse Audit

Google Lighthouse was used to evaluate the application across:

| Category       | Target |
| -------------- | -----: |
| Performance    |    90+ |
| Accessibility  |    90+ |
| Best Practices |    90+ |
| SEO            |    90+ |

The Lighthouse audit report is included with the project as:

```text
Lighthouse-Task-7-Report.pdf
```

> The final scores shown in the PDF represent the actual Lighthouse audit results for the optimized production build.

---

## 🛠️ Technologies Used

* **React.js**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Google Lighthouse**

---

## 📁 Project Structure

```text
Task-7-Performance/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── Lighthouse-Task-7-Report.pdf
```

---

## 🎯 Learning Outcomes

Through this task, I practiced:

* Understanding frontend performance
* Image optimization techniques
* React component lazy loading
* Dynamic imports
* Code splitting
* Loading states with Suspense
* Responsive frontend development
* Core Web Vitals concepts
* Lighthouse performance auditing
* Production build optimization

---

## 🔗 Live Demo
<img width="1147" height="870" alt="image" src="https://github.com/user-attachments/assets/fa3645f9-20b8-43fa-9f1d-33e1c02a2e5c" />
<img width="1060" height="689" alt="image" src="https://github.com/user-attachments/assets/9dad2db5-34f5-4789-ac19-92571213f9e1" />
<img width="1292" height="885" alt="image" src="https://github.com/user-attachments/assets/145129f6-fcbf-4515-9a96-a46a0be13560" />
<img width="1899" height="712" alt="image" src="https://github.com/user-attachments/assets/de59d4b8-9fbc-4edf-8135-65a58599f807" />







