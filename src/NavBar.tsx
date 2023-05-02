import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useThemeContext } from "./ThemeContext";

export const NavBar = (): JSX.Element => {
  const { toggleTheme, secondaryTheme } = useThemeContext();

  return (
    <NavBarWrapper>
      <StyledNavBar>
        <StyledLink to={"/"}>About</StyledLink>
        <StyledLink to={"/FAKE"}>404</StyledLink>
      </StyledNavBar>
      <p>Toggle Theme</p>
      <Switch
        defaultChecked={secondaryTheme}
        onChange={() => toggleTheme()}
      ></Switch>
    </NavBarWrapper>
  );
};

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
  width: 100%;
  background-color: #203354;
`;

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
  &:hover {
    color: #61dafb;
  }
`;
