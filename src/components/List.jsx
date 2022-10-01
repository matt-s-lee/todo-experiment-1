import styled from "styled-components";

import Task from "./Task";

export default function List({ taskArray, listName }) {
  return (
    // what does title do?
    <TaskList listName={listName}>
      <Title>{listName}</Title>
      {taskArray.map((task, index, arr) => {
        return <Task key={index} task={task} index={index} listName={listName} />;
      })}
    </TaskList>
  );
}

const Title = styled.h2`
  display: flex;
  align-self: center;
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
  opacity: ${(props) => (props.listName === "Finished" ? "0.5" : "1")};
`;
