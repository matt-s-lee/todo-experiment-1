import { useContext } from "react";

import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { Divider } from "./components/Divider";
import { Box } from "@mui/system";
import { TaskContext } from "./context/TaskContext";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  const { allTasks, finishedTasks } = useContext(TaskContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Wrapper>
        <Form />
        <Divider>Center</Divider>
        {allTasks && <List listName="To-Do" taskArray={allTasks} />}
        {finishedTasks && <List listName="Finished" taskArray={finishedTasks} />}
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// themeprovider: how to toggle?
// https://mui.com/material-ui/customization/dark-mode/#toggling-color-mode
