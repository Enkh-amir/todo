const openBtn = document.getElementById("add_task");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const card_data_of_todo = document.getElementById("to_do");
const card_data_of_in_prog = document.getElementById("in_progress");
const card_data_of_done = document.getElementById("done");
const card_data_of_block = document.getElementById("blocked");
let card_count = document.getElementsByClassName("task-count");
const submit_close = document.getElementById("sub_button")

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
submit_close.addEventListener("click", () => {
  modal.classList.remove("open");
});

const inputBox = document.getElementById("input-box");
const selectedOption = document.getElementById("select1");
const submitBtn = document.getElementById("sub_button");

let taskCounts = {
  "to_do": 0,
  "in_progress": 0,
  "done": 0,
  "blocked": 0,
};

// window.onload = function() {
//   loadTasksFromStorage();
//   updateTaskCount();
// };

function updateTaskCount() {
  card_count[0].innerText = taskCounts["to_do"];
  card_count[1].innerText = taskCounts["in_progress"];
  card_count[2].innerText = taskCounts["done"];
  card_count[3].innerText = taskCounts["blocked"];
}

function handleTaskActions(taskElement, column) {
  taskElement.querySelector(".ri-delete-bin-line").addEventListener("click", () => {
    column.removeChild(taskElement);
    taskCounts[column.id]--;
    updateTaskCount();
    saveTasksToStorage();
  });

  taskElement.querySelector(".ri-pencil-line").addEventListener("click", () => {
    const taskDataElement = taskElement.querySelector(".task-data");
    const currentText = taskDataElement.innerText;
    taskDataElement.innerHTML = `<input type="text" value="${currentText}" id="editing_input">`;
    
    const editingInput = taskDataElement.querySelector("#editing_input");
    editingInput.addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        taskDataElement.innerText = editingInput.value;
        saveTasksToStorage(); 
      }
    });
  });
}

function addElementToStatus() {
  const option = selectedOption.value;
  const taskData = inputBox.value;
  if (!taskData) {
    alert("Please enter a task");
    return;
  }

  const newElement = document.createElement("div");
  newElement.className = "task";
  newElement.setAttribute("draggable", "true");
  newElement.setAttribute("id", `task-${Date.now()}`);  
  newElement.innerHTML = `
    <i class="ri-draggable"></i>
    <div class="task-data">${taskData}</div>
    <i class="ri-pencil-line"></i>
    <i class="ri-delete-bin-line"></i>
  `;

  let targetColumn;
  switch (option) {
    case "to Do":
      targetColumn = card_data_of_todo;
      taskCounts["to_do"]++;
      break;
    case "In Progress":
      targetColumn = card_data_of_in_prog;
      taskCounts["in_progress"]++;
      break;
    case "Done":
      targetColumn = card_data_of_done;
      taskCounts["done"]++;
      break;
    case "Block":
      targetColumn = card_data_of_block;
      taskCounts["blocked"]++;
      break;
    default:
      alert("Please select a valid status");
      return;
  }

  targetColumn.appendChild(newElement);
  handleTaskActions(newElement, targetColumn);
  setupDragAndDrop();
  
  updateTaskCount();
  saveTasksToStorage(); 
  inputBox.value = "";
}


submitBtn.addEventListener("click", addElementToStatus);

function setupDragAndDrop() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.setData("sourceColumn", task.parentNode.id); // Store the source column ID
    });
  });

  [card_data_of_todo, card_data_of_in_prog, card_data_of_done, card_data_of_block].forEach((column) => {
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text");
              
      const sourceColumnId = e.dataTransfer.getData("sourceColumn");
      const draggableElement = document.getElementById(id);

      if (sourceColumnId !== column.id) {
        // Decrement the count of the source column
        taskCounts[sourceColumnId]--;
        // Increment the count of the target column
        taskCounts[column.id]++;
        updateTaskCount();
        saveTasksToStorage();
      }

      column.appendChild(draggableElement);
      console.log("Task moved:", draggableElement);
    });
  });
}

setupDragAndDrop();

function saveTasksToStorage() {
  const tasks = {
    to_do: [],
    in_progress: [],
    done: [],
    blocked: []
  };

  [card_data_of_todo, card_data_of_in_prog, card_data_of_done, card_data_of_block].forEach((column, index) => {
    const taskElements = column.querySelectorAll(".task");
    taskElements.forEach((taskElement) => {
      tasks[column.id].push({
        id: taskElement.id,
        content: taskElement.querySelector(".task-data").innerText
      });
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskCounts", JSON.stringify(taskCounts));
}

function loadTasksFromStorage() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const storedCounts = JSON.parse(localStorage.getItem("taskCounts"));

  if (storedTasks) {
    for (const columnId in storedTasks) {
      storedTasks[columnId].forEach((task) => {
        const newElement = document.createElement("div");
        newElement.className = "task";
        newElement.setAttribute("draggable", "true");
        newElement.setAttribute("id", task.id);  // Use the stored ID
        newElement.innerHTML = `
          <i class="ri-draggable"></i>
          <div class="task-data">${task.content}</div>
          <i class="ri-pencil-line"></i>
          <i class="ri-delete-bin-line"></i>
        `;

        document.getElementById(columnId).appendChild(newElement);
        handleTaskActions(newElement, document.getElementById(columnId));
      });
    }
    setupDragAndDrop();
  }

  if (storedCounts) {
    taskCounts = storedCounts;
  }
}
