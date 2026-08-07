# Zynxis Client Dashboard

A modern and responsive **Client Dashboard** developed as the final capstone project of my Zynxis Frontend Development Internship.

The dashboard provides clients with a centralized workspace to monitor projects, manage tasks, visualize performance data, manage their profile, and switch between dark and light themes.

## 🚀 Live Demo

http://zynxisdashboardinternship.netlify.app

## 📌 Project Overview

The Zynxis Client Dashboard is designed as a professional client-facing workspace with a clean, modern interface and responsive layout.

The dashboard includes:

- 📊 Data visualization and analytics
- 📁 Project management
- ✅ Task management
- 👤 Profile management
- ⚙️ Settings
- 🌙 Dark/Light mode
- 📱 Responsive design

## ✨ Features

### Dashboard Overview

- Total Projects statistics
- Active Tasks statistics
- Overall Progress
- Completed Tasks
- Project performance chart
- Task status donut chart
- Recent projects
- Recent activity updates

### 📊 Analytics

- Visual representation of project performance
- Task breakdown
- Progress tracking
- Interactive charts

### 📁 Projects

- View project information
- Project status
- Project progress
- Project details in a structured dashboard layout

### ✅ Task Management

The task management section is fully interactive.

Users can:

- Add new tasks
- Edit existing tasks
- Delete tasks
- Change task status
- Mark tasks as completed
- Track Pending and In Progress tasks
- Set task priority
- Set due dates

Task data is also stored using **Local Storage**, allowing tasks to remain available after refreshing the browser.

### 👤 Profile

- View user information
- Manage profile details
- Professional client profile interface

### ⚙️ Settings

- Dashboard preferences
- Theme controls
- Interface customization

### 🌙 Dark / Light Mode

The dashboard supports both:

- Dark Mode
- Light Mode

The theme can be switched according to the user's preference.

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- CSS3
- React Router DOM
- Recharts
- Lucide React
- Local Storage
- Netlify

## 📂 Project Structure

```text
Task-8/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── StatCard.jsx
│   │   └── ProjectTable.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Analytics.jsx
│   │   ├── Projects.jsx
│   │   ├── Tasks.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── data/
│   │   └── dashboardData.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
