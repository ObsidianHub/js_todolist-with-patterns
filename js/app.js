// Init Tasks module
const tasks = Tasks.getInstance();

// Init Locastorage module
const localstorage = Localstorage;

// Init Notification module
const notification = Notification;

// Subscribe on add task event
addTaskObserver.subscribe(localstorage.update);
addTaskObserver.subscribe(notification.show);
addTaskObserver.subscribe(ui.checkList);

removeTaskObserver.subscribe(localstorage.update);
removeTaskObserver.subscribe(notification.show);
removeTaskObserver.subscribe(ui.checkList);

removeAllTasksObserver.subscribe(localstorage.update);
removeAllTasksObserver.subscribe(notification.show);
removeAllTasksObserver.subscribe(ui.checkList);

// Init Ovservers
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();

// Init elements
const form = document.forms["addTodoItem"];
const inputText = form.elements["todoText"];
const ul = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-btn");
