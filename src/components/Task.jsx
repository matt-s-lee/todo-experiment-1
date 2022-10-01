import { useState, useContext } from "react";

import styled from "styled-components";

import { TaskContext } from "../context/TaskContext";
import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export default function Task({ task, index, listName }) {
  const [toggleX, setToggleX] = useState("hidden");
  const [toggleCheck, setToggleCheck] = useState(false);
  // eslint-disable-next-line
  const { allTasks, setAllTasks, finishedTasks, setFinishedTasks } = useContext(TaskContext);
  console.log(finishedTasks);

  function showCloseIcon() {
    setToggleX("visible");
  }

  function hideCloseIcon() {
    setToggleX("hidden");
  }

  function doneTask() {
    setToggleCheck(!toggleCheck);
    if (listName === "Finished") {
      setFinishedTasks((finishedTasks) =>
        finishedTasks.filter((everyTask, everyTaskIndex) => {
          return everyTaskIndex !== index;
        })
      );
      setAllTasks([...allTasks, task]);
    } else {
      setAllTasks((allTasks) =>
        allTasks.filter((everyTask, everyTaskIndex) => {
          return everyTaskIndex !== index;
        })
      );
      setFinishedTasks([...finishedTasks, task]);
    }
  }
  // is it a problem if everyTask isn't used

  function deleteTask(ev) {
    ev.stopPropagation();
    if (listName === "Finished") {
      setFinishedTasks((finishedTasks) =>
        finishedTasks.filter((everyTask, everyTaskIndex) => {
          return everyTaskIndex !== index;
        })
      );
    } else {
      setAllTasks((allTasks) =>
        allTasks.filter((everyTask, everyTaskIndex) => {
          return everyTaskIndex !== index;
        })
      );
    }
  }

  return (
    <ListItem>
      <TaskCard onMouseEnter={showCloseIcon} onMouseLeave={hideCloseIcon} onClick={doneTask}>
        {listName === "Finished" ? (
          <CheckBoxIcon sx={{ mx: 1 }} />
        ) : (
          <CheckBoxOutlineBlankIcon sx={{ mx: 1 }} />
        )}
        <TaskText toggleCheck={toggleCheck}>{task}</TaskText>
        <CloseIcon visibility={toggleX} sx={{ mx: 0.5 }} onClick={deleteTask} />
      </TaskCard>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TaskCard = styled(Card)`
  padding: 1em;
  display: flex;
  border-radius: 0.4em;
  margin-bottom: 0.4em;
`;

const TaskText = styled.span`
  /* text-decoration: ${({ toggleCheck }) => toggleCheck && "line-through"}; */
  text-decoration: ${(props) => (props.thing === "Finished" ? "line-through" : "none")};
`;
