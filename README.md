# Smart Task Manager

A modern, responsive task management dashboard built with **HTML, CSS, and JavaScript**.
This web application allows users to create, manage, and track daily tasks with deadlines, categories, and visual progress indicators.

The application is designed with a clean productivity-focused interface and stores task data locally using the browser's **Local Storage API**, ensuring tasks remain available even after refreshing the page.

---

## 🚀 Live Demo

**Live Website:**
https://abhiamrit.github.io/To-Do-List/

**Repository:**
https://github.com/Abhiamrit/To-Do-List

---

## ✨ Features

* Add tasks with **title, description, deadline, category, and color**
* Mark tasks as **completed or pending**
* **Progress tracker** showing completion percentage
* Dashboard displaying:

  * Total tasks
  * Completed tasks
  * Pending tasks
* **Deadline monitoring** with overdue alerts
* **Dark mode toggle** for better user experience
* **Local Storage persistence** so tasks remain saved
* Clean and responsive UI built with modern design principles

---

## 🧠 How It Works

Tasks are stored in the browser using **Local Storage**, allowing the application to persist data without requiring a backend database.

Each task contains:

* Task title
* Description
* Creation timestamp
* Deadline
* Category
* Color tag
* Completion status

JavaScript dynamically renders the task list, updates the dashboard statistics, and recalculates the completion progress.

---

## 🛠 Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript (Vanilla)

**Storage**

* Browser Local Storage API

---

## 📂 Project Structure

```
To-Do-List
│
├── index.html      # Dashboard page
├── add.html        # Add task form
├── style.css       # Styling and UI design
├── todo.js         # Application logic
└── README.md       # Project documentation
```

---

## 📊 Dashboard Overview

The dashboard provides an overview of productivity:

* Task completion progress
* Total tasks created
* Completed tasks
* Pending tasks
* List of tasks with category, deadline, and description

Users can mark tasks as complete by clicking the task title and remove tasks using the delete button.

---

## 🌙 Dark Mode

The application includes a dark mode toggle that switches the interface to a darker theme for improved readability and reduced eye strain.

The theme preference is also stored locally in the browser.

---

## 📱 Responsiveness

The UI is designed to adapt across screen sizes, ensuring usability on both desktop and smaller screens.

---

## 📌 Future Improvements

Possible enhancements for future versions:

* Drag-and-drop task management
* Task filtering and search
* Priority levels for tasks
* Data synchronization using a backend database
* User authentication
