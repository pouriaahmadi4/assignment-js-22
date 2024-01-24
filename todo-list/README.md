# ToDo-list

## Explanation

This is a super handy, super simple to do list.

You will be given a list of tasks which are "To Do". We call these tasks "ToDos"

Each item in the list should have 2 buttons:

- One to click when the ToDo has been completed - it will apply a line-through style to the text of the ToDo.
- A second to delete the ToDo. This could be used to delete completed ToDos from the list, or remove ToDos that we are no longer interested in doing.

We also want to be able to add ToDos to the list using an input field and a button. When ToDos are created this way they should be added to the list with the 2 above buttons.

More details for the implementation of this challenge can be found in `script.js`

## Installation

Fork this repository and then open in VSCode. To view the website, open index.html in a browser.

## Instructions

The `populateTodoList()` function should iterate over the list of todos that we are given at the start, it should create a <li> for the todo along with some other stuff that you can find in index.html and below.

The items in the todo list are currently hard-coded into the HTML, refactor the code so that this function creates them and adds the following functionality to them:

Each todo should have this HTML inside it:

```html
<span class="badge bg-primary rounded-pill">
  <i class="fa fa-check" aria-hidden="true"></i>
  <i class="fa fa-trash" aria-hidden="true"></i>
</span>
```

The first `<i>` tag needs an event listener that applies a line-through text-decoration styling to the text of the todo. It should remove the styling if it is clicked again.

The second `<i>` tag needs an event listener that deletes the parent `<li>` element from the `<ul>`.

## Advanced Challenge

### OPTIONAL

### Mass delete of completed ToDos

Develop the ToDo list further and allow users to delete all completed ToDos.

Add a button that users can click that will iterate through the list of ToDos and then delete them only if they have been completed.

## Extra Advanced Challenge

### OPTIONAL

### Set deadlines for ToDos

We want users to be able to set, and see, deadlines for their ToDos.

When creating ToDos we want the user to be able to use a datepicker input so they can see when they need to complete the ToDo. The date be added to the ToDo in the list. If there is no date set when the ToDo is created then this can be skipped.

EXTRA CHALLENGE: instead of displaying the date on the ToDo, implement a countdown of days left until the deadline. You can use the Javascript Date reference to accomplish this:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


// Add this to your form using innerHTML
let dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "todoDeadline";
let dateDiv = document.createElement("div");
dateDiv.classList.add("col-auto");
dateDiv.appendChild(dateInput);
form.insertBefore(dateDiv, form.childNodes[2]);

// Modify your addNewTodo function
function addNewTodo(event) {
  event.preventDefault();
  let inputEle = document.getElementById("todoInput");
  let deadlineEle = document.getElementById("todoDeadline");
  let newTodo = {task: inputEle.value, completed: false, deadline: new Date(deadlineEle.value)};

  if (!newTodo.task) {
    alert('Please enter a task to add!');
    return;
  }

  todos.push(newTodo);
  populateTodoList(todos);
  inputEle.value = "";
  deadlineEle.value = "";
}

// Modify your populateTodoList function
function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
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
      ${todo.task} ${daysLeft}
      <span class="badge bg-primary rounded-pill">
        <i class="fa fa-check" aria-hidden="true"></i>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>
    `;

    // Rest of your code...
  }
}
