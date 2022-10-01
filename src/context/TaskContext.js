import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, finishedTasks, setFinishedTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
