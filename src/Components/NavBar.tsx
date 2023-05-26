import Switch from "@mui/material/Switch";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Theme, useThemeContext } from "../ThemeContext";
import { ToolTip } from "./Reusable/ToolTip";

export const NavBar = (): JSX.Element => {
  const {
    theme,
    toggleTheme,
    secondaryTheme: isSecondaryTheme,
  } = useThemeContext();

  const [secondaryTheme] = useState(isSecondaryTheme);

  return (
    <NavBarWrapper>
      <NamePlate>_Zachary Cooper</NamePlate>
      <StyledNavBar>
        <StyledLink theme={theme} to={"/"}>
          About Me
        </StyledLink>
        <StyledLink theme={theme} to={"/resume"}>
          Resume
        </StyledLink>
        <ToolTip arrow title="Star Wars Crawl Animation">
          <StyledLink theme={theme} to={"/story"}>
            My Story
          </StyledLink>
        </ToolTip>
        <ToolTip arrow title="Under Construction">
          <StyledLink theme={theme} to={"/interactive"}>
            Interactive About Me
          </StyledLink>
        </ToolTip>
      </StyledNavBar>
      <ToolTip arrow title="Secondary Theme Is Currently Under Construction!">
        <div>
          <ThemeSwitch
            customtheme={theme}
            size="medium"
            defaultChecked={secondaryTheme}
            onChange={() => toggleTheme()}
            disabled
          ></ThemeSwitch>
        </div>
      </ToolTip>
    </NavBarWrapper>
  );
};

export const NavBarWrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  height: 4em;
`;

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const StyledLink = styled(Link).attrs((props) => ({
  theme: props.theme,
}))`
  position: relative;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.color};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const NamePlate = ({ children }: any) => {
  const { theme } = useThemeContext();
  const nav = useNavigate();
  const location = useLocation();

  return (
    <NamePlateText
      onClick={() => {
        if (location.pathname !== "/") nav("/");
      }}
      isHome={location.pathname === "/"}
      theme={theme}
      className="Name_Plate"
    >
      {children}
    </NamePlateText>
  );
};

const NamePlateText = styled("h2")(
  ({ theme, isHome }: { theme: Theme; isHome: boolean }): any => ({
    ...theme,
    position: "relative",
    fontSize: "2em",
    backgroundColor: "transparent",
    "user-select": "none",
    cursor: isHome ? "default" : "pointer",
    "h1,h2,h3,h4,h5,h6,p,a": {
      color: `${theme.color}`,
    },
  })
);

const ThemeSwitch = styled(Switch)(
  ({ customtheme: customTheme }: { customtheme: Theme }): any => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: customTheme.color,
    },
    "& .MuiSwitch-switchBase": {
      color: customTheme.color,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiSwitch-thumb": {
      border: "1px solid black",
    },
    "& .MuiSwitch-track": {
      opacity: ".75 !important",
      border: "1px solid black",
      backgroundColor: `${customTheme.color} !important`,
    },
  })
);
