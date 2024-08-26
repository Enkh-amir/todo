const openBtn = document.getElementById("add_task");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");
const card_data_of_todo = document.getElementById("to_do");
const card_data_of_in_prog = document.getElementById("in_progress");
const card_data_of_done = document.getElementById("done");
const card_data_of_block = document.getElementById("blocked");
const card_of_todo = document.getElementById("to-do-header");
const card_of_in_prog = document.getElementById("in_header");
const card_of_done = document.getElementById("done_header");
const card_of_block = document.getElementById("block_header");
let card_count = document.getElementsByClassName("task-count");
openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

const inputBox = document.getElementById("input-box");
const selectedOption = document.getElementById("select1");
const submitBtn = document.getElementById("sub_button");
var i = 0;
var a = 0;
var b = 0;
var c = 0;
let array = [];


var addElementToStatus = () => {
  let option = selectedOption.value;
  var task_data = inputBox.value;
  if (option == "to Do") {
    let new_element = document.createElement("div");
    new_element.setAttribute("id", "task");
    new_element.setAttribute("class", "task");
    new_element.setAttribute("draggable", "true");
    new_element.innerHTML = `
          <i class="ri-draggable"></i>
          <div id="text-cache"  class="task-data">${task_data}</div>
          <i class="ri-pencil-line"></i>
          <i class="ri-delete-bin-line"></i>
    `;
    card_data_of_todo.appendChild(new_element);
    let tasks = document.getElementsByClassName("task");
    for (array of tasks) {
      array.addEventListener("dragstart", (e) => {
        let selected = e.target;

        card_data_of_todo.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_todo.addEventListener("drop", (e) => {
          card_data_of_todo.appendChild(selected);
          selected = null;
        });
        card_data_of_in_prog.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_in_prog.addEventListener("drop", (e) => {
          card_data_of_in_prog.appendChild(selected);
          selected = null;
        });
        card_data_of_done.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_done.addEventListener("drop", (e) => {
          card_data_of_done.appendChild(selected);
          selected = null;
        });
        card_data_of_block.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_block.addEventListener("drop", (e) => {
          card_data_of_block.appendChild(selected);
          selected = null;
        });
      });
    }
    i++;
    card_count[0].innerText = i;
  } else if (option == "In Progress") {
    let new_element = document.createElement("div");
    new_element.setAttribute("id", "task");
    new_element.setAttribute("class", "task");
    new_element.setAttribute("draggable", "true");
    new_element.innerHTML = `
          <i class="ri-draggable"></i>
          <div class="task-data">${task_data}</div>
          <i class="ri-pencil-line"></i>
          <i class="ri-delete-bin-line"></i>
    `;
    card_data_of_in_prog.appendChild(new_element);
    let tasks = document.getElementsByClassName("task");
    for (array of tasks) {
      array.addEventListener("dragstart", (e) => {
        let selected = e.target;

        card_data_of_todo.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_todo.addEventListener("drop", (e) => {
          card_data_of_todo.appendChild(selected);
          selected = null;
        });
        card_data_of_in_prog.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_in_prog.addEventListener("drop", (e) => {
          card_data_of_in_prog.appendChild(selected);
          selected = null;
        });
        card_data_of_done.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_done.addEventListener("drop", (e) => {
          card_data_of_done.appendChild(selected);
          selected = null;
        });
        card_data_of_block.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_block.addEventListener("drop", (e) => {
          card_data_of_block.appendChild(selected);
          selected = null;
        });
      });
    }
    a++;
    card_count[1].innerText = a;
  } else if (option == "Done") {
    let new_element = document.createElement("div");
    new_element.setAttribute("id", "task");
    new_element.setAttribute("class", "task");
    new_element.setAttribute("draggable", "true");
    new_element.innerHTML = `
          <i class="ri-draggable"></i>
          <div id="text-cache" class="task-data">${task_data}</div>
          <i class="ri-pencil-line"></i>
          <i class="ri-delete-bin-line"></i>
    
    `;
    card_data_of_done.appendChild(new_element);
    let tasks = document.getElementsByClassName("task");
    for (array of tasks) {
      array.addEventListener("dragstart", (e) => {
        let selected = e.target;

        card_data_of_todo.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_todo.addEventListener("drop", (e) => {
          card_data_of_todo.appendChild(selected);
          selected = null;
        });
        card_data_of_in_prog.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_in_prog.addEventListener("drop", (e) => {
          card_data_of_in_prog.appendChild(selected);
          selected = null;
        });
        card_data_of_done.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_done.addEventListener("drop", (e) => {
          card_data_of_done.appendChild(selected);
          selected = null;
        });
        card_data_of_block.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_block.addEventListener("drop", (e) => {
          card_data_of_block.appendChild(selected);
          selected = null;
        });
      });
    }
    b++;
    card_count[2].innerText = b;
  } else if (option == "Block") {
    var new_element = document.createElement("div");
    new_element.setAttribute("id", "task");
    new_element.setAttribute("class", "task");
    new_element.setAttribute("draggable", "true");
    new_element.innerHTML = `
          <i class="ri-draggable"></i>
          <div class="task-data">${task_data}</div>
          <i class="ri-pencil-line"></i>
          <i class="ri-delete-bin-line"></i>
    `;
    card_data_of_block.appendChild(new_element);
    let tasks = document.getElementsByClassName("task");

    for (array of tasks) {
      array.addEventListener("dragstart", (e) => {
        let selected = e.target;

        card_data_of_todo.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_todo.addEventListener("drop", (e) => {
          card_data_of_todo.appendChild(selected);
          selected = null;
        });
        card_data_of_in_prog.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_in_prog.addEventListener("drop", (e) => {
          card_data_of_in_prog.appendChild(selected);
          selected = null;
        });
        card_data_of_done.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_done.addEventListener("drop", (e) => {
          card_data_of_done.appendChild(selected);
          selected = null;
        });
        card_data_of_block.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        card_data_of_block.addEventListener("drop", (e) => {
          card_data_of_block.appendChild(selected);
          selected = null;
        });
      });
    }
    c++;
    card_count[3].innerText = c;
  } else {
    alert("please select status");
  }

  // submitBtn.addEventListener("click", () => {
  //   modal.classList.remove("open");
  // });
};
card_data_of_todo.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-delete-bin-line") {
    const removed_element = e.target.closest("#task");
    card_data_of_todo.removeChild(removed_element);
    i--;
    card_count[0].innerText = i;
  }
});
card_data_of_in_prog.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-delete-bin-line") {
    const removed_element = e.target.closest("#task");
    card_data_of_in_prog.removeChild(removed_element);
    a--;
    card_count[1].innerText = a;
  }
});
card_data_of_done.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-delete-bin-line") {
    const removed_element = e.target.closest("#task");
    card_data_of_done.removeChild(removed_element);
    b--;
    card_count[2].innerText = b;
  }
});
card_data_of_block.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-delete-bin-line") {
    const removed_element = e.target.closest("#task");
    card_data_of_block.removeChild(removed_element);
    c--;
    card_count[3].innerText = c;
  }
});

submitBtn.addEventListener("click", addElementToStatus);

card_data_of_todo.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-pencil-line") {
    const select_edit_element = e.target;
    const edited_element = select_edit_element.previousElementSibling;
    edited_element.innerHTML = `
              <input type="text" id="editing_input">
    `;
    const edited_text = document.getElementById("editing_input");
    card_data_of_todo.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        console.log(edited_text.value);
        edited_element.innerHTML = `
              <div class="task-data">${edited_text.value}</div>
        `;
        // const edited_element = editing_input;
      }
    });
  }
});
card_data_of_in_prog.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-pencil-line") {
    const select_edit_element = e.target;
    const edited_element = select_edit_element.previousElementSibling;
    edited_element.innerHTML = `
              <input type="text" id="editing_input">
    `;
    const edited_text = document.getElementById("editing_input");
    card_data_of_in_prog.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        console.log(edited_text.value);
        edited_element.innerHTML = `
              <div class="task-data">${edited_text.value}</div>
        `;
        // const edited_element = editing_input;
      }
    });
  }
});
card_data_of_done.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-pencil-line") {
    const select_edit_element = e.target;
    const edited_element = select_edit_element.previousElementSibling;
    edited_element.innerHTML = `
              <input type="text" id="editing_input">
    `;
    const edited_text = document.getElementById("editing_input");
    card_data_of_done.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        console.log(edited_text.value);
        edited_element.innerHTML = `
              <div class="task-data">${edited_text.value}</div>
        `;
        // const edited_element = editing_input;
      }
    });
  }
});
card_data_of_block.addEventListener("click", (e) => {
  if (e.target.classList.value === "ri-pencil-line") {
    const select_edit_element = e.target;
    const edited_element = select_edit_element.previousElementSibling;
    edited_element.innerHTML = `
              <input type="text" id="editing_input">
    `;
    const edited_text = document.getElementById("editing_input");
    card_data_of_block.addEventListener("keydown", (event) => {
      if (event.code == "Enter") {
        console.log(edited_text.value);
        edited_element.innerHTML = `
              <div class="task-data">${edited_text.value}</div>
        `;
        // const edited_element = editing_input;
      }
    });
  }
});