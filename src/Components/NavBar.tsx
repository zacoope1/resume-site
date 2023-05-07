import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme, useThemeContext } from "../ThemeContext";

export const NavBar = (): JSX.Element => {
  const {
    theme,
    toggleTheme,
    secondaryTheme: isSecondaryTheme,
  } = useThemeContext();

  const [secondaryTheme] = useState(isSecondaryTheme);

  return (
    <NavBarWrapper>
      <NamePlateText theme={theme} className="Name_Plate">
        _Zachary Cooper
      </NamePlateText>
      <StyledNavBar>
        <StyledLink theme={theme} to={"/"}>
          About
        </StyledLink>
        <StyledLink theme={theme} to={"/FAKE"}>
          404
        </StyledLink>
      </StyledNavBar>
      <ThemeSwitch
        customtheme={theme}
        size="medium"
        defaultChecked={secondaryTheme}
        onChange={() => toggleTheme()}
      ></ThemeSwitch>
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

const NamePlateText = styled("h2")(({ theme }: { theme: Theme }) => ({
  ...theme,
  fontSize: "2em",
  backgroundColor: "transparent",
  "user-select": "none",
  "h1,h2,h3,h4,h5,h6,p,a": {
    color: `${theme.color}`,
  },
}));

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
