const UI = (function () {
  const ul = document.querySelector(".list-group");
  const emptyAlert = document.querySelector(".empty-alert");

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
