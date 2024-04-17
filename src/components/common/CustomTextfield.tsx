import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldVariants } from "@mui/material";
import React, { useEffect, useState } from "react";
import { REGEX } from "../../utils/Constant";

type IProp = {
  name: string;
  lbl: string;
  type?: "email" | "text" | "password" | "number";
  size?: "small" | "medium";
  varient?: TextFieldVariants;
};

const CustomTextfield: React.FC<IProp> = (props) => {
  const {
    name,
    lbl,
    type = "text",
    size = "small",
    varient = "standard",
  } = props;

  const [showText, setShowText] = useState(false);
  const [val, setVal] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (val) {
      handleValidation();
    } else {
      setErrorText("");
    }
  }, [val]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVal(event.target.value);
  };

  const handleValidation = () => {
    switch (type) {
      case "email":
        if (!val.match(REGEX.Email)) {
          setErrorText("Please enter a valid email");
        } else {
          setErrorText("");
        }
        break;
      default:
        setErrorText("");
        break;
    }
  };

  return (
    <TextField
      id={name}
      label={lbl}
      type={showText ? "text" : type}
      variant={varient}
      size={size}
      onChange={handleChange}
      value={val}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment
                  position="end"
                  className="cursor-pointer"
                  onClick={() => setShowText(!showText)}
                >
                  {showText ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }
          : undefined
      }
      error={errorText ? true : false}
      helperText={errorText}
    />
  );
};

export default CustomTextfield;
