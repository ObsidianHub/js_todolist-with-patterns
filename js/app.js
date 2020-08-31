// Init Tasks module
const tasks = Tasks.getInstance();

// Init Locastorage module
const localstorage = Localstorage;

// Init Notification module
const notification = Notification;

// Init Ovservers
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();

// Init elements
const form = document.forms["addTodoItem"];
const inputText = form.elements["todoText"];
const ul = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-btn");
