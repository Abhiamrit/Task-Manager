let container = document.getElementById("task-container");
let deletebtn = document.getElementById("delete");
let array = ["study", "sleep", "eat", "talk"];
let tinput = document.getElementById("task-input");
let tsubmit = document.getElementById("task-submit");

deletebtn.addEventListener("click", () => {
  array.pop();
  refreshUi(array);
});

tsubmit.addEventListener("click", () => {
  let task = tinput.value;
  if (task.length <= 0) {
    alert("Task is empty");
    return;
  }
  array = [task, ...array];
  refreshUi(array);
});

function refreshUi(arr) {
  container.innerHTML = "";
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const template = `<li class="list"><span>${element}</span> <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg></button></li>`;
    container.innerHTML = container.innerHTML + template;
  }

  let deleteButtons = document.getElementsByClassName("delete");
  for (let index = 0; index < deleteButtons.length; index++) {
    const expectedItem = deleteButtons[index];
    expectedItem.addEventListener("click", () => {
      array.splice(index, 1);
      refreshUi(array);
    });
  }
}

refreshUi(array);
