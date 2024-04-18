import { Button, ButtonProps } from "@mui/material";
import React from "react";

type IProp = {
  variant: "text" | "outlined" | "contained";
  lbl: string;
  size?: "large" | "medium" | "small";
  handleBtnClick?: () => void;
  disabled?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  autoFocus?: boolean;
};

const CustomBtn: React.FC<IProp & Partial<ButtonProps>> = (props) => {
  const {
    variant,
    lbl,
    size = "medium",
    handleBtnClick,
    disabled,
    color = "primary",
    autoFocus,
    ...rest
  } = props;
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      onClick={handleBtnClick}
      disabled={disabled}
      autoFocus={autoFocus}
      {...rest}
    >
      {lbl}
    </Button>
  );
};

export default CustomBtn;
