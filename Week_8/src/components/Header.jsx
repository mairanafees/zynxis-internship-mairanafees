import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import { useLocation } from "react-router-dom";

function Header({ openSidebar }) {
  const location = useLocation();

  const getPageName = () => {
    if (location.pathname === "/") return "Dashboard";

    const name = location.pathname
      .replace("/", "")
      .replace("-", " ");

    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-button"
          onClick={openSidebar}
        >
          <Menu size={21} />
        </button>

        <div>
          <span className="breadcrumb">
            Zynxis / Workspace
          </span>

          <h1>{getPageName()}</h1>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
          />
          <span className="search-shortcut">
            ⌘ K
          </span>
        </div>

        <button className="notification-button">
          <Bell size={19} />
          <span />
        </button>

        <div className="header-profile">
          <div className="avatar small-avatar">
            MN
          </div>

          <div className="header-user">
            <strong>Maira Nafees</strong>
            <span>Client</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;