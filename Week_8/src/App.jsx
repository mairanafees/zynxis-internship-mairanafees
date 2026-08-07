import { useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <div className="main-area">
          <Header
            openSidebar={() =>
              setSidebarOpen(true)
            }
          />

          <main>
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/analytics"
                element={<Analytics />}
              />

              <Route
                path="/projects"
                element={<Projects />}
              />

              <Route
                path="/tasks"
                element={<Tasks />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;