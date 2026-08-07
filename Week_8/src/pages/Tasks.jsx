import { useEffect, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Plus,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import { tasks as initialTasks } from "../data/dashboardData";

function Tasks() {
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("zynxisTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : initialTasks;
  });

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    project: "",
    priority: "Medium",
    status: "Pending",
    due: "",
  });

  useEffect(() => {
    localStorage.setItem(
      "zynxisTasks",
      JSON.stringify(taskList)
    );
  }, [taskList]);

  const completedTasks = taskList.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressTasks = taskList.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pendingTasks = taskList.filter(
    (task) => task.status === "Pending"
  ).length;

  const openAddForm = () => {
    setEditingTask(null);

    setFormData({
      title: "",
      project: "",
      priority: "Medium",
      status: "Pending",
      due: "",
    });

    setShowForm(true);
  };

  const openEditForm = (task) => {
    setEditingTask(task);

    setFormData({
      title: task.title,
      project: task.project,
      priority: task.priority,
      status: task.status,
      due: task.due,
    });

    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    if (editingTask) {
      setTaskList((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...formData,
              }
            : task
        )
      );
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
      };

      setTaskList((prevTasks) => [
        ...prevTasks,
        newTask,
      ]);
    }

    closeForm();
  };

  const deleteTask = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setTaskList((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const toggleTaskStatus = (id) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">
            WORKSPACE
          </span>

          <h1>Tasks</h1>

          <p>
            Manage and track your workspace tasks.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={openAddForm}
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="task-summary">
        <div>
          <div className="summary-icon">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>
        </div>

        <div>
          <div className="summary-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <strong>{inProgressTasks}</strong>
            <span>In Progress</span>
          </div>
        </div>

        <div>
          <div className="summary-icon">
            <Circle size={20} />
          </div>

          <div>
            <strong>{pendingTasks}</strong>
            <span>Pending</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card tasks-card">
        <div className="card-header">
          <div>
            <span>TASK MANAGEMENT</span>
            <h3>All Tasks</h3>
          </div>

          <span className="task-count">
            {taskList.length} Tasks
          </span>
        </div>

        <div className="task-list">
          {taskList.length === 0 ? (
            <div className="empty-tasks">
              <ListTodoIcon />
              <h3>No tasks yet</h3>
              <p>
                Click "Add Task" to create your
                first task.
              </p>
            </div>
          ) : (
            taskList.map((task) => (
              <div
                className="task-item"
                key={task.id}
              >
                <button
                  className="task-check"
                  onClick={() =>
                    toggleTaskStatus(task.id)
                  }
                  title="Change task status"
                >
                  {task.status === "Completed" ? (
                    <CheckCircle2 size={21} />
                  ) : (
                    <Circle size={21} />
                  )}
                </button>

                <div className="task-main">
                  <strong
                    className={
                      task.status === "Completed"
                        ? "completed-task"
                        : ""
                    }
                  >
                    {task.title}
                  </strong>

                  <span>{task.project}</span>
                </div>

                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                <span
                  className={`status-badge ${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.status}
                </span>

                <div className="task-date">
                  <CalendarDays size={16} />
                  {task.due}
                </div>

                <div className="task-actions">
                  <button
                    onClick={() =>
                      openEditForm(task)
                    }
                    title="Edit task"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() =>
                      deleteTask(task.id)
                    }
                    title="Delete task"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showForm && (
        <div
          className="modal-overlay"
          onClick={closeForm}
        >
          <div
            className="task-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="modal-header">
              <div>
                <span>TASK MANAGEMENT</span>

                <h2>
                  {editingTask
                    ? "Edit Task"
                    : "Add New Task"}
                </h2>
              </div>

              <button
                className="modal-close"
                onClick={closeForm}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Task Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div className="form-group">
                <label>Project</label>

                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="Low">
                      Low
                    </option>

                    <option value="Medium">
                      Medium
                    </option>

                    <option value="High">
                      High
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Completed">
                      Completed
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Due Date</label>

                <input
                  type="date"
                  name="due"
                  value={formData.due}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  {editingTask
                    ? "Update Task"
                    : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function ListTodoIcon() {
  return (
    <div className="empty-task-icon">
      <Circle size={28} />
    </div>
  );
}

export default Tasks;
