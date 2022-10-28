import { useState, useContext } from "react";

import styled from "styled-components";

import { TaskContext } from "../context/TaskContext";
import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import OutsideAlert from "../hooks/OutsideAlert";

export default function Task({ task, index, listName }) {
  const [toggleX, setToggleX] = useState("hidden");
  const [toggleCheck, setToggleCheck] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const { allTasks, setAllTasks, finishedTasks, setFinishedTasks } = useContext(TaskContext);

  function showCloseIcon() {
    setToggleX("visible");
  }

  function hideCloseIcon() {
    setToggleX("hidden");
  }

  function toggleEdit(ev) {
    ev.stopPropagation();
    setClicked(!clicked);
  }

  function editTask(ev) {
    ev.preventDefault();
    if (finishedTasks.includes(task)) {
      const clonedTasks = finishedTasks.slice();
      clonedTasks[index] = editedTask;
      setFinishedTasks(clonedTasks);
      setEditedTask("");
    } else {
      const clonedTasks = allTasks.slice();
      clonedTasks[index] = editedTask;
      setAllTasks(clonedTasks);
      setEditedTask("");
    }
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
      <TaskCard onMouseEnter={showCloseIcon} onMouseLeave={hideCloseIcon}>
        {listName === "Finished" ? (
          <CheckBoxIcon sx={{ mx: 1 }} onClick={doneTask} />
        ) : (
          <CheckBoxOutlineBlankIcon sx={{ mx: 1 }} onClick={doneTask} />
        )}
        {clicked ? (
          <OutsideAlert clicked={clicked} setClicked={setClicked} editTask={editTask}>
            <form onSubmit={editTask}>
              <input
                autoFocus
                value={editedTask}
                onChange={(ev) => setEditedTask(ev.target.value)}
              ></input>
            </form>
          </OutsideAlert>
        ) : (
          <TaskText onClick={toggleEdit}>{task}</TaskText>
        )}
        {/* <TaskText toggleCheck={toggleCheck}>{task}</TaskText> */}
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
