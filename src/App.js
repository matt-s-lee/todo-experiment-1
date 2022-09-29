import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { Box } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Wrapper>
        <Form />
        <List />
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
