const id = Id;

const Tasks = (function () {
  const createInstance = function () {
    return {
      getTasks,
      setTasks,
      addTask,
      removeTask,
      removeAll,
    };
  };

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    },
  };
})();
