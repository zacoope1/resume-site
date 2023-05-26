import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import styled from "styled-components";

export const ToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "var(--bg-color);",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    fontSize: "12px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));
