const UI = (function () {
  const ul = document.querySelector(".list-group");
  const emptyAlert = document.querySelector(".empty-alert");

  const listTemplate = function (task) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.setAttribute("data-id", task.id);
    let span = document.createElement("span");
    span.textContent = task.text;
    // Create tag i fa-trash-alt
    let iDelete = document.createElement("i");
    iDelete.className = "fas fa-trash-alt delete-item ml-4";
    // Create tag i fa-edit-alt
    let iEdit = document.createElement("i");
    iEdit.className = "fas fa-edit edit-item ml-auto";
    // Append delete and edit icon to li
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
  };

  const deleteAll = function () {
    ul.innerHTML = "";
  };

  return {
    addTask,
    deleteTask,
    checkList,
    deleteAll,
  };
})();
