import { Bell, Lock, Monitor, Shield } from "lucide-react";

import PageHeader from "../components/PageHeader";
import ThemeToggle from "../components/ThemeToggle";

function Settings() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="PREFERENCES"
        title="Settings"
        description="Customize your dashboard experience and account preferences."
      />

      <div className="settings-grid">
        <div className="dashboard-card settings-card">
          <div className="settings-icon">
            <Monitor size={21} />
          </div>

          <div className="settings-content">
            <h3>Appearance</h3>

            <p>
              Switch between dark and light dashboard
              themes.
            </p>

            <ThemeToggle />
          </div>
        </div>

        <div className="dashboard-card settings-card">
          <div className="settings-icon">
            <Bell size={21} />
          </div>

          <div className="settings-content">
            <h3>Notifications</h3>

            <p>
              Manage project updates and activity
              notifications.
            </p>

            <label className="switch-row">
              <span>Email notifications</span>

              <input
                type="checkbox"
                defaultChecked
              />

              <span className="switch" />
            </label>
          </div>
        </div>

        <div className="dashboard-card settings-card">
          <div className="settings-icon">
            <Lock size={21} />
          </div>

          <div className="settings-content">
            <h3>Security</h3>

            <p>
              Review your account security and
              authentication preferences.
            </p>

            <button className="secondary-button">
              Manage Security
            </button>
          </div>
        </div>

        <div className="dashboard-card settings-card">
          <div className="settings-icon">
            <Shield size={21} />
          </div>

          <div className="settings-content">
            <h3>Privacy</h3>

            <p>
              Control how your workspace information
              is stored and displayed.
            </p>

            <button className="secondary-button">
              Privacy Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;