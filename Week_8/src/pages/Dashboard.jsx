import {
  CheckCircle2,
  FolderKanban,
  ListTodo,
  TrendingUp,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import StatCard from "../components/StatCard";
import ProjectTable from "../components/ProjectTable";

import {
  projects,
  progressData,
  taskStatusData,
  recentActivity,
} from "../data/dashboardData";

function Dashboard() {
  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <span className="page-eyebrow">
            OVERVIEW
          </span>

          <h2>
            Good afternoon, Maira <span>👋</span>
          </h2>

          <p>
            Here's what's happening across your
            workspace today.
          </p>
        </div>

        <div className="date-card">
          <span>Today</span>
          <strong>August 07, 2026</strong>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Projects"
          value="12"
          change="+12.5%"
          icon={FolderKanban}
        />

        <StatCard
          title="Active Tasks"
          value="48"
          change="+8.2%"
          icon={ListTodo}
        />

        <StatCard
          title="Overall Progress"
          value="78%"
          change="+6.4%"
          icon={TrendingUp}
        />

        <StatCard
          title="Completed"
          value="34"
          change="+15.3%"
          icon={CheckCircle2}
        />
      </div>

      <div className="dashboard-grid charts-row">
        <div className="dashboard-card large-chart">
          <div className="card-header">
            <div>
              <span>PROJECT PERFORMANCE</span>
              <h3>Progress Overview</h3>
            </div>

            <button className="period-button">
              Last 8 months
            </button>
          </div>

          <div className="chart-container">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={progressData}>
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#8b98a0"
                      stopOpacity={0.3}
                    />

                    <stop
                      offset="95%"
                      stopColor="#8b98a0"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="var(--muted)"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="var(--muted)"
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />

                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    color: "var(--text)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="progress"
                  stroke="#8b98a0"
                  strokeWidth={3}
                  fill="url(#progressGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card task-chart-card">
          <div className="card-header">
            <div>
              <span>TASK BREAKDOWN</span>
              <h3>Task Status</h3>
            </div>
          </div>

          <div className="donut-container">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={taskStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {taskStatusData.map(
                    (entry, index) => {
                      const colors = [
                        "#87949c",
                        "#59666e",
                        "#343d42",
                      ];

                      return (
                        <Cell
                          key={entry.name}
                          fill={colors[index]}
                        />
                      );
                    }
                  )}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    color: "var(--text)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="donut-center">
              <strong>100</strong>
              <span>Tasks</span>
            </div>
          </div>

          <div className="legend">
            {taskStatusData.map(
              (item, index) => {
                const colors = [
                  "#87949c",
                  "#59666e",
                  "#343d42",
                ];

                return (
                  <div
                    className="legend-item"
                    key={item.name}
                  >
                    <span
                      style={{
                        background:
                          colors[index],
                      }}
                    />

                    <span>{item.name}</span>

                    <strong>
                      {item.value}%
                    </strong>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-grid bottom-grid">
        <div className="dashboard-card projects-card">
          <div className="card-header">
            <div>
              <span>WORKSPACE</span>
              <h3>Recent Projects</h3>
            </div>

            <a
              href="/projects"
              className="view-link"
            >
              View all →
            </a>
          </div>

          <ProjectTable
            projects={projects}
            compact
          />
        </div>

        <div className="dashboard-card activity-card">
          <div className="card-header">
            <div>
              <span>ACTIVITY</span>
              <h3>Recent Updates</h3>
            </div>
          </div>

          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div
                className="activity-item"
                key={activity.id}
              >
                <div className="activity-dot" />

                <div>
                  <p>{activity.title}</p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;