import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styled from "styled-components";
import { Button, FormControl, TextField, FormHelperText } from "@mui/material";

export default function Form() {
  // eslint-disable-next-line
  const { allTasks, setAllTasks } = useContext(TaskContext);
  const [task, setTask] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    setAllTasks((allTasks) => [...allTasks, task]);
    setTask("");
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormControl variant="standard">
        <InputField
          label="Task"
          variant="outlined"
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
          sx={{ color: "black" }}
        />
        <FormHelperText id="component-helper-text">What do you need to do?</FormHelperText>
      </FormControl>
      <Button sx={{ my: 2, color: "black", border: "1px solid grey" }} onClick={handleSubmit}>
        Submit
      </Button>
    </FormWrapper>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
`;

const InputField = styled(TextField)`
  width: 50vw;
`;
