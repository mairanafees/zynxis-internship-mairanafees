import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import PageHeader from "../components/PageHeader";

import {
  activityData,
  taskStatusData,
} from "../data/dashboardData";

function Analytics() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="INSIGHTS"
        title="Analytics"
        description="Monitor workspace activity, project performance, and task distribution."
      />

      <div className="analytics-summary">
        <div>
          <span>AVERAGE PROJECT PROGRESS</span>
          <strong>78.4%</strong>
          <small>↑ 6.4% from last month</small>
        </div>

        <div>
          <span>PROJECT ACTIVITY</span>
          <strong>14</strong>
          <small>↑ 16.7% this month</small>
        </div>

        <div>
          <span>TASK COMPLETION</span>
          <strong>82%</strong>
          <small>↑ 9.2% from last month</small>
        </div>

        <div>
          <span>CLIENT SATISFACTION</span>
          <strong>94%</strong>
          <small>↑ 3.8% this quarter</small>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="dashboard-card analytics-chart">
          <div className="card-header">
            <div>
              <span>PROJECT ACTIVITY</span>
              <h3>Monthly Projects</h3>
            </div>
          </div>

          <div className="chart-container large">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={activityData}>
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
                />

                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                  }}
                />

                <Bar
                  dataKey="projects"
                  fill="#7d8a92"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card analytics-pie">
          <div className="card-header">
            <div>
              <span>TASK ANALYSIS</span>
              <h3>Task Distribution</h3>
            </div>
          </div>

          <div className="chart-container pie-large">
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
                  outerRadius={100}
                  innerRadius={60}
                >
                  {taskStatusData.map(
                    (item, index) => {
                      const colors = [
                        "#87949c",
                        "#59666e",
                        "#343d42",
                      ];

                      return (
                        <Cell
                          key={item.name}
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
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="dashboard-card insights-card">
        <div className="card-header">
          <div>
            <span>PERFORMANCE INSIGHTS</span>
            <h3>Workspace Summary</h3>
          </div>
        </div>

        <div className="insights-grid">
          <div>
            <strong>↑ 24%</strong>
            <p>
              Project activity has increased compared
              with the previous quarter.
            </p>
          </div>

          <div>
            <strong>82%</strong>
            <p>
              Tasks are currently completed or actively
              being worked on.
            </p>
          </div>

          <div>
            <strong>94%</strong>
            <p>
              Current client satisfaction based on
              recent project feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;