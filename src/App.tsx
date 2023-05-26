import React, { useEffect } from "react";
import styled from "styled-components";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./Components/3D/NotFound";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Theme, useThemeContext } from "./ThemeContext";
import { Loading } from "./Components/Loading";
import "./index.css";
import { StarWarsCrawl } from "./Components/3D/StarWarsCrawl";
import { Resume } from "./Components/Resume";
import { Interactive } from "Components/3D/Interactive";

export type PageProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

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
            <Route
              path="/"
              element={<Home loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="/interactive"
              element={
                <Interactive loading={loading} setLoading={setLoading} />
              }
            />
            <Route
              path="/story"
              element={
                <StarWarsCrawl loading={loading} setLoading={setLoading} />
              }
            />
            <Route
              path="/resume"
              element={<Resume loading={loading} setLoading={setLoading} />}
            />
            <Route
              path="*"
              element={<NotFound loading={loading} setLoading={setLoading} />}
            />
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
    fontFamily: `${theme.fontFamily}`,
  },
}));

export default App;
