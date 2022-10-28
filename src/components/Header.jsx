import { useContext } from "react";

import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

import Container from "@mui/material/Container";
import { IconButton, Box, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container maxWidth="xl">
      <Box>
        <Toolbar>
          <IconButton>
            <FastfoodIcon />
          </IconButton>
          <Typography sx={{ mr: 2 }}>TO-DO</Typography>
          <ThemeButton sx={{ flexGrow: 0 }} onClick={toggleTheme} theme={theme}>
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </ThemeButton>
        </Toolbar>
      </Box>
    </Container>
  );
}

const ThemeButton = styled(Box)`
  &:hover {
    color: ${(props) => (props.theme === "light" ? "grey" : "yellow")};
    transition: transform 200ms ease-in-out;
    transform: scale(1.05);
  }
`;
