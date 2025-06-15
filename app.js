let tasks = [];

function addTask() {

  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (task) {
    tasks.push(task);
    input.value = '';
    renderList();
  }
  console.log(tasks);
}

function renderList() {
  const list = document.getElementById('taskList');
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    // listItem.addEventListener('click', () => removeTask(index));
    list.appendChild(listItem);
  });
}
