import {
  BarChart3,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Sidebar({ isOpen, closeSidebar }) {
  const navigation = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FolderKanban,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-mark">Z</div>

            <div>
              <strong>ZYNXIS</strong>
              <span>CLIENT HUB</span>
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={closeSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-label">
          WORKSPACE
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <ThemeToggle />

          <button className="logout-button">
            <LogOut size={18} />
            <span>Log Out</span>
          </button>

          <div className="sidebar-version">
            Zynxis Client Hub
            <span>v1.0.0</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;