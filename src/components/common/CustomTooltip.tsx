import { Tooltip, TooltipProps, styled } from "@mui/material";
import React, { ReactElement } from "react";

type IProp = {
  content: string;
  children: ReactElement;
  position?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  bgColor?: string;
  textColor?: string;
};

const CustomTooltip: React.FC<IProp> = (props) => {
  const {
    content,
    position = "top",
    textColor = "white",
    children,
    bgColor = "",
  } = props;
  const CTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    .MuiTooltip-tooltip {
      background-color: ${bgColor};
      color: ${textColor};
    }
    .MuiTooltip-arrow {
      color: ${bgColor};
    }
  `;
  return (
    <CTooltip title={content} placement={position} arrow>
      {children}
    </CTooltip>
  );
};

export default CustomTooltip;
