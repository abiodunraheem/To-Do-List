function displayTask() {
  const todoList = document.querySelector('.todo-list');
  const localData = JSON.parse(localStorage.getItem('tasks'));
  if (localData !== null) {
    localData.forEach((task) => {
      todoList.innerHTML += `
        <div class="edit-task" data-key="${task.index}"> 
            <ul>
                <li class="tick" ><input id="${task.index}" type="checkbox"></li>
                <li class"text-value" >${task.text}</li>
                <li class="remove-btn" id="${task.index}"><i class="fa fa-times" aria-hidden="true delete-task"></i></i></li>
            </ul>
            <i class="fa-solid fa-trash-can delete-icon"></i>
            <hr>
        </div>
        `;
    });
  }
}

export default displayTask;