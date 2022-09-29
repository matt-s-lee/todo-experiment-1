import Container from "@mui/material/Container";
import { IconButton, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ color: "primary.main" }}>
        <Toolbar>
          <IconButton></IconButton>
          <Typography sx={{ mr: 2 }}>GARDEN TO-DO</Typography>
          <Box sx={{ flexGrow: 0, border: 1 }}>Menu</Box>
        </Toolbar>
      </Box>
    </Container>
  );
}
