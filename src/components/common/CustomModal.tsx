import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { ReactElement } from "react";
import CustomBtn from "./CustomBtn";

type IProp = {
  isOpen: boolean;
  handleClose: () => void;
  handleSave?: () => void;
  title: string | JSX.Element;
  children: ReactElement;
  saveLbl?: string;
  clsLbl?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullScreen?: boolean;
  btnColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};

const CustomModal: React.FC<IProp> = (props) => {
  const {
    isOpen,
    handleClose,
    handleSave,
    children,
    title,
    maxWidth,
    fullScreen,
    saveLbl = "Save",
    clsLbl = "Cancel",
    btnColor = "primary",
  } = props;
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      fullWidth
      fullScreen={fullScreen}
      maxWidth={maxWidth ? maxWidth : false}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        className="absolute right-2 top-3 text-gray-200 p-0"
        // sx={{
        //     position: 'absolute',
        //     right: 8,
        //     top: 8,
        //     color: (theme) => theme.palette.grey[500],
        //   }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {handleSave && (
          <CustomBtn
            color={btnColor}
            variant="contained"
            autoFocus
            handleBtnClick={handleSave}
            lbl={saveLbl}
          />
        )}
        <CustomBtn
          variant="outlined"
          color={btnColor}
          autoFocus
          handleBtnClick={handleClose}
          lbl={clsLbl}
        />
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
