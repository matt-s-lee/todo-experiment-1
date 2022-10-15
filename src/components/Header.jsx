import Container from "@mui/material/Container";
import { IconButton, Box, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export default function Header() {
  return (
    <Container maxWidth="xl" sx={{ background: "lightgrey" }}>
      <Box sx={{ color: "black" }}>
        <Toolbar>
          <IconButton>
            <FastfoodIcon />
          </IconButton>
          <Typography sx={{ mr: 2 }}>TO-DO</Typography>
          <Box sx={{ flexGrow: 0 }}>{/* <FastfoodIcon /> */}</Box>
        </Toolbar>
      </Box>
    </Container>
  );
}
