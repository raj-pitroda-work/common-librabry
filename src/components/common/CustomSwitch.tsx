import { Switch } from "@mui/material";
import React from "react";

type IProp = {
  isChecked: boolean;
  handleSwitchToggle: (isChecked: boolean) => void;
  swithcBg?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  disabled?: boolean;
  size?: "small" | "medium";
  leftLbl?: string;
  rightLbl?: string;
};

const CustomSwitch: React.FC<IProp> = (props) => {
  const {
    leftLbl,
    rightLbl,
    isChecked,
    handleSwitchToggle,
    size = "medium",
    swithcBg = "error",
    disabled,
  } = props;

  return (
    <>
      {leftLbl && <span className="size-2">{leftLbl}</span>}
      <Switch
        color={swithcBg}
        checked={isChecked}
        onChange={(_e, cheked) => handleSwitchToggle(cheked)}
        disabled={disabled}
        size={size}
      />
      {rightLbl && <span className="size-2">{rightLbl}</span>}
    </>
  );
};

export default CustomSwitch;
