import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function LoadingSection() {
  return (
    <div className="loading-section">
      Loading section...
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <Projects />
        </Suspense>

        <section className="performance-section" id="performance">
          <div className="performance-inner">
            <p className="eyebrow">03 — PERFORMANCE</p>

            <h2>Designed to load less and deliver more.</h2>

            <div className="performance-grid">
              <div>
                <strong>01</strong>
                <h3>Image Lazy Loading</h3>
                <p>
                  Images outside the initial viewport are loaded only when
                  they become relevant.
                </p>
              </div>

              <div>
                <strong>02</strong>
                <h3>Component Lazy Loading</h3>
                <p>
                  React components are split into separate chunks using
                  dynamic imports.
                </p>
              </div>

              <div>
                <strong>03</strong>
                <h3>Async Image Decoding</h3>
                <p>
                  Non-critical images use asynchronous decoding to reduce
                  rendering pressure.
                </p>
              </div>

              <div>
                <strong>04</strong>
                <h3>Production Build</h3>
                <p>
                  Vite's production build minimizes and bundles the
                  application for deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<LoadingSection />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;