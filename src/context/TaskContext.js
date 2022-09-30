import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks }}>{children}</TaskContext.Provider>
  );
};
