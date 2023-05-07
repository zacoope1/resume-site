import React, { useEffect } from "react";
import styled from "styled-components";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./Components/3D/NotFound";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Theme, useThemeContext } from "./ThemeContext";
import { Loading } from "./Components/Loading";
import "./index.css";

const App = (): JSX.Element => {
  const { themeIsLoading } = useThemeContext();
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    //TODO: Add All Preloads Here
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {(loading || themeIsLoading) && <Loading />}
      <Router>
        <PageContainer>
          <NavBar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </PageContainer>
      </Router>
    </>
  );
};

const PageContainer = ({ children }: any) => {
  const { theme } = useThemeContext();

  return <StyledPageContainer theme={theme}>{children}</StyledPageContainer>;
};

const StyledPageContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  ...theme,
  backgroundColor: "transparent",
  "h1,h2,h3,h4,h5,h6,p,a": {
    color: `${theme.color}`,
  },
}));

export default App;
