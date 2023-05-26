import { Backdrop } from "@mui/material";
import styled from "styled-components";
import { Theme, useThemeContext } from "../ThemeContext";

export const Loading = (): JSX.Element => {
  const { theme } = useThemeContext();

  return (
    <Backdrop open={true} sx={{ zIndex: 1000 }}>
      <StyledOverlay theme={theme}>
        <StyledWordContainer className="w3-animate-top">
          <StyledLoadingText>
            {Array.from("Zachary").map((letter: string, index) => (
              <Letter
                key={`Loading_${letter}_${index}`}
                className="Animation_Neon_Flicker"
                theme={theme}
              >
                {letter}
              </Letter>
            ))}
          </StyledLoadingText>
          <StyledLoadingText>
            {Array.from("Cooper").map((letter: string, index) => (
              <Letter
                key={`Loading_${letter}_${index}`}
                className="Animation_Neon_Flicker"
                theme={theme}
              >
                {letter}
              </Letter>
            ))}
          </StyledLoadingText>
        </StyledWordContainer>
        <StyledWordContainer
          className="w3-animate-top"
          theme={{
            ...theme,
          }}
        >
          <StyledLoadingText>
            {Array.from("Loading").map((letter: string, index) => (
              <Letter
                key={`Loading_${letter}_${index}`}
                className="Animation_Neon_Flicker"
                theme={{ ...theme, fontSize: "0.75em" }}
              >
                {letter}
              </Letter>
            ))}
            {Array.from("...").map((letter: string, index) => (
              <Letter
                key={`Loading_${letter}_${index}`}
                theme={{
                  ...theme,
                  fontSize: "0.75em",
                  animation: "appear 3s linear infinite",
                  "animation-delay": `${index * 500}ms}`,
                  visibility: "hidden",
                }}
              >
                <span>{letter}</span>
              </Letter>
            ))}
          </StyledLoadingText>
        </StyledWordContainer>
      </StyledOverlay>
    </Backdrop>
  );
};

const StyledOverlay = styled("div")(({ theme }: { theme: Theme }): any => ({
  ...theme,
  position: "absolute",
  "z-index": "1000",
  top: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  "flex-direction": "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledWordContainer = styled("div")(({ theme }: { theme: Theme }) => ({
  width: "40em",
  ...theme,
  backgroundColor: "transparent",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "@media (max-width: 800px)": {
    "flex-direction": "column",
  },
}));

const StyledLoadingText = styled("div")(({ theme }: { theme: Theme }) => ({
  ...theme,
  backgroundColor: "transparent",
  fontSize: "5em",
  fontWeight: "300",
  "margin-right": "0.25em",
  "&:last-child": {
    "margin-right": "0",
  },
  "@media (max-width: 800px)": {
    "margin-right": "0",
  },
}));

export const Letter = styled("span")(({ theme }: { theme: Theme }) => ({
  ...theme,
  backgroundColor: "transparent",
}));
