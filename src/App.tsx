import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { NotFound } from "./3D/NotFound";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Theme, ThemeProvider, useThemeContext } from "./ThemeContext";
import "./index.css";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Router>
        <PageContainer>
          <NavBar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
};

const PageContainer = ({ children }: any) => {
  const { theme } = useThemeContext();

  return <StyledPageContainer theme={theme}>{children}</StyledPageContainer>;
};

const StyledPageContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  ...theme,
  "*": {
    color: `${theme.color}`,
  },
  height: "100vh",
  "background-color": "#282c34",
}));

export default App;
