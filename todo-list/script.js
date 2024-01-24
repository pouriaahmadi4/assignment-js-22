function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = '';
  
  for (let todo of todos) {
    let listItem =document.createElement("li");
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    let daysLeft = '';
    if (todo.deadline) {
      let diffTime = Math.abs(todo.deadline - new Date());
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      daysLeft = `${diffDays} days left`;
    }

    listItem.innerHTML= `
      ${todo.task} ---> ${daysLeft}
      <span class="badge bg-primary rounded-pill">
        <i class="fa fa-check" aria-hidden="true"></i>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    `;

    if(todo.completed) {
      listItem.style.textDecoration = "line-through"
    }
    
    listItem.querySelector('.fa-check').addEventListener('click', function() {
      todo.completed = !todo.completed;
      listItem.style.textDecoration = todo.completed ? 'line-through' : 'none';
    });

    listItem.querySelector('.fa-trash').addEventListener('click', function() {
      list.removeChild(listItem);
    });

    list.appendChild(listItem);
  };
  

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  // { task: 'Wash the dishes', completed: false },
  // { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputEle = document.getElementById("todoInput");
  let deadlineEle = document.getElementById("todoDeadline");

  // alert the user if the input field is empty
  if (!inputEle.value.trim()) {
    alert('Please enter a task!');
    return;
  }

  // alert the user to put a date in the future not past 😒
  let selectedDate = new Date(deadlineEle.value);
  if (selectedDate < new Date()) {
    alert('Please select a date in the future!');
    return;
  }

  let newTodo = {task: inputEle.value, completed: false, deadline: selectedDate};

  if (!newTodo) {
    alert('Please enter a task to add!');
    return;
  }

  todos.push(newTodo);
  populateTodoList(todos);
  inputEle.value = "";
  deadlineEle.value = "";
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

let deleteAllBtn = document.createElement("button");
deleteAllBtn.innerHTML = "Delete All";
deleteAllBtn.classList.add("btn", "btn-warning", "mb-3");
deleteAllBtn.onclick = deleteAllCompletedTodos;

let form = document.querySelector("form.row.g-3");
let div = document.createElement("div");
div.classList.add("col-auto");
div.appendChild(deleteAllBtn);
form.appendChild(div);

function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  todos = todos.filter(todo=> !todo.completed);
  populateTodoList(todos)
}

// Extra Advanced OPTIONAL Challenge
// Set deadlines for ToDos

let dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "todoDeadline";
dateInput.classList.add("form-control", "bg-success")
let dateDiv = document.createElement("div");
dateDiv.classList.add("col-auto");
dateDiv.appendChild(dateInput);
// putting the date div after the text input using the insertBefore
form.insertBefore(dateDiv, form.childNodes[2]);

// I updated the code above for this extra feature in the functions