const UI = (function () {
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
