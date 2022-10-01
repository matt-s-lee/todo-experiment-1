import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styled from "styled-components";
import { Button, FormControl, TextField, FormHelperText } from "@mui/material";

export default function Form() {
  const { allTasks, setAllTasks } = useContext(TaskContext);
  const [task, setTask] = useState("");

  function handleChange(ev) {
    ev.preventDefault();
    setTask(ev.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setAllTasks((allTasks) => [...allTasks, task]);
    setTask("");
    console.log(allTasks);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormControl variant="standard">
        <InputField label="Task" variant="outlined" value={task} onChange={handleChange} />
        <FormHelperText id="component-helper-text">Type to-do task here</FormHelperText>
      </FormControl>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormWrapper>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled(TextField)`
  width: 50vw;
`;
