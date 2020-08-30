// Init Tasks module
const tasks = Tasks.getInstance();

// Init Ovservers
const addTaskObserver = new EventObserver();
const removeTaskObserver = new EventObserver();
const removeAllTasksObserver = new EventObserver();
