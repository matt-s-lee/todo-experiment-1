import styled from "styled-components";

import Task from "./Task";

const sampleTasks = ["Pick up something to eat", "Don't sleep", "Lather, rinse, repeat"];

export default function List() {
  return (
    <TaskList>
      {sampleTasks.map((task, index) => {
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
