import { Switch, SwitchProps } from "@mui/material";
import React from "react";

type IProp = {
  isChecked: boolean;
  handleSwitchToggle: (isChecked: boolean) => void;
  switchBg?:
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

const CustomSwitch: React.FC<IProp & Partial<SwitchProps>> = (props) => {
  const {
    leftLbl,
    rightLbl,
    isChecked,
    handleSwitchToggle,
    size = "medium",
    switchBg,
    disabled,
    ...rest
  } = props;

  return (
    <>
      {leftLbl && <span className="size-2">{leftLbl}</span>}
      <Switch
        color={switchBg}
        checked={isChecked}
        onChange={(_e, cheked) => handleSwitchToggle(cheked)}
        disabled={disabled}
        size={size}
        {...rest}
      />
      {rightLbl && <span className="size-2">{rightLbl}</span>}
    </>
  );
};

export default CustomSwitch;
