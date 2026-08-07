export const projects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Nova Technologies",
    category: "Web Design",
    progress: 82,
    status: "Active",
    deadline: "Aug 18, 2026",
  },
  {
    id: 2,
    name: "Mobile Application",
    client: "Orbit Solutions",
    category: "Mobile App",
    progress: 64,
    status: "In Progress",
    deadline: "Aug 24, 2026",
  },
  {
    id: 3,
    name: "Client Dashboard",
    client: "Vertex Labs",
    category: "Dashboard",
    progress: 91,
    status: "Completed",
    deadline: "Aug 10, 2026",
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    client: "Urban Market",
    category: "E-Commerce",
    progress: 48,
    status: "In Progress",
    deadline: "Sep 02, 2026",
  },
  {
    id: 5,
    name: "Brand Identity",
    client: "Pixel House",
    category: "Branding",
    progress: 76,
    status: "Active",
    deadline: "Aug 29, 2026",
  },
];

export const tasks = [
  {
    id: 1,
    title: "Finalize homepage design",
    project: "Website Redesign",
    priority: "High",
    status: "Completed",
    due: "Aug 08",
  },
  {
    id: 2,
    title: "Review mobile navigation",
    project: "Mobile Application",
    priority: "Medium",
    status: "In Progress",
    due: "Aug 10",
  },
  {
    id: 3,
    title: "Prepare dashboard documentation",
    project: "Client Dashboard",
    priority: "High",
    status: "Completed",
    due: "Aug 09",
  },
  {
    id: 4,
    title: "Optimize product images",
    project: "E-Commerce Platform",
    priority: "Low",
    status: "Pending",
    due: "Aug 15",
  },
  {
    id: 5,
    title: "Create brand presentation",
    project: "Brand Identity",
    priority: "Medium",
    status: "In Progress",
    due: "Aug 18",
  },
  {
    id: 6,
    title: "Client feedback review",
    project: "Website Redesign",
    priority: "High",
    status: "Pending",
    due: "Aug 19",
  },
];

export const progressData = [
  { month: "Jan", progress: 32 },
  { month: "Feb", progress: 41 },
  { month: "Mar", progress: 48 },
  { month: "Apr", progress: 57 },
  { month: "May", progress: 64 },
  { month: "Jun", progress: 71 },
  { month: "Jul", progress: 78 },
  { month: "Aug", progress: 86 },
];

export const activityData = [
  { month: "Jan", projects: 4 },
  { month: "Feb", projects: 7 },
  { month: "Mar", projects: 5 },
  { month: "Apr", projects: 9 },
  { month: "May", projects: 8 },
  { month: "Jun", projects: 12 },
  { month: "Jul", projects: 10 },
  { month: "Aug", projects: 14 },
];

export const taskStatusData = [
  {
    name: "Completed",
    value: 54,
  },
  {
    name: "In Progress",
    value: 28,
  },
  {
    name: "Pending",
    value: 18,
  },
];

export const recentActivity = [
  {
    id: 1,
    title: "Website Redesign reached 82%",
    time: "12 minutes ago",
    type: "progress",
  },
  {
    id: 2,
    title: "New task assigned to Mobile Application",
    time: "1 hour ago",
    type: "task",
  },
  {
    id: 3,
    title: "Client Dashboard marked completed",
    time: "3 hours ago",
    type: "success",
  },
  {
    id: 4,
    title: "New feedback received from Nova Technologies",
    time: "Yesterday",
    type: "message",
  },
];