/* ---------- LOAD TASKS ---------- */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* ---------- DARK MODE ---------- */

const darkToggle = document.getElementById("dark-toggle");

if (darkToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

/* ---------- ADD TASK PAGE ---------- */

const form = document.getElementById("task-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    const deadline = document.getElementById("task-deadline").value;
    const category = document.getElementById("task-category").value;
    const color = document.getElementById("task-color").value;

    const newTask = {
      title: title,
      desc: desc,
      deadline: deadline,
      category: category,
      color: color,
      created: new Date().toLocaleString(),
      completed: false,
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "index.html";
  });
}

/* ---------- DASHBOARD ---------- */

const taskList = document.getElementById("task-list");

if (taskList) {
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  let completed = 0;

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task";

    card.style.borderLeft = "6px solid " + task.color;

    if (task.completed) {
      card.classList.add("completed");
      completed++;
    }

    /* Deadline check */

    let deadlineText = task.deadline || "None";

    if (task.deadline) {
      let today = new Date();
      let due = new Date(task.deadline);

      if (due < today) {
        deadlineText = "⚠️ Overdue";
        card.classList.add("overdue");
      }
    }

    card.innerHTML = `

<div class="task-header">

<div class="task-title">${task.title}</div>

<button class="delete-btn">✕</button>

</div>

<div>${task.desc || ""}</div>

<div class="task-meta">
Category: ${task.category}<br>
Created: ${task.created}<br>
Deadline: ${deadlineText}
</div>

`;

    /* COMPLETE TASK */

    card.querySelector(".task-title").addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;

      saveTasks();
      renderTasks();
    });

    /* DELETE TASK */

    card.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1);

      saveTasks();
      renderTasks();
    });

    taskList.appendChild(card);
  });

  /* ---------- UPDATE STATS ---------- */

  const totalEl = document.getElementById("total");
  const completedEl = document.getElementById("completed");
  const pendingEl = document.getElementById("pending");

  if (totalEl) totalEl.innerText = tasks.length;
  if (completedEl) completedEl.innerText = completed;
  if (pendingEl) pendingEl.innerText = tasks.length - completed;

  /* ---------- PROGRESS BAR ---------- */

  let percent = 0;

  if (tasks.length > 0) {
    percent = Math.round((completed / tasks.length) * 100);
  }

  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-percent");

  if (progressFill) {
    progressFill.style.width = percent + "%";
  }

  if (progressText) {
    progressText.innerText = percent + "%";
  }
}

/* ---------- SAVE TASKS ---------- */

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

