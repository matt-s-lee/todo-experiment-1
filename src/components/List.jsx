import { useContext } from "react";
import styled from "styled-components";

import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

export default function List() {
  const { allTasks } = useContext(TaskContext);

  return (
    <TaskList>
      {allTasks.map((task, index) => {
        return <Task id={index} task={task} />;
      })}
    </TaskList>
  );
}

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
`;
