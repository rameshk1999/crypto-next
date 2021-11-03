import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ColorModeProvider from "../context/ThemeContext";
import Header from "../components/Layout";
import HomeContainer from "../views/HomeContainer";

const App = () => {
  return (
    <ColorModeProvider>
      <Box>
        <Header />
        <CssBaseline />
        <Container maxWidth="md">
          <HomeContainer />
        </Container>
      </Box>
    </ColorModeProvider>
  );
};

export default App;
