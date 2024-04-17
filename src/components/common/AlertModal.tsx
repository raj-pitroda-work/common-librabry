import React from "react";
import CustomModal from "./CustomModal";
import { CheckCircle, Error, Warning } from "@mui/icons-material";

type IProp = {
  type: "success" | "warning" | "error";
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
};

const AlertModal: React.FC<IProp> = (props) => {
  const { type, isOpen, handleClose, children } = props;

  const renderTitle = () => {
    switch (type) {
      case "success":
        return (
          <div className="text-green-800 flex">
            <CheckCircle style={{ color: "green" }} fontSize="large" />
            <strong>
              <p className="mt-1"> Success</p>
            </strong>
          </div>
        );
      case "warning":
        return (
          <div className="text-orange-400 flex">
            <Warning style={{ color: "orange" }} fontSize="large" />
            <strong>
              <p className="mt-1">Warning</p>
            </strong>
          </div>
        );
      case "error":
        return (
          <div className="text-red-500 flex">
            <Error style={{ color: "red" }} fontSize="large" />
            <strong>
              <p className="mt-1"> Error</p>
            </strong>
          </div>
        );
      default:
        return <></>;
    }
  };
  return (
    <CustomModal
      isOpen={isOpen}
      handleClose={handleClose}
      title={renderTitle()}
      maxWidth="xs"
      btnColor={
        type === "success" ? "success" : type === "error" ? "error" : "warning"
      }
    >
      {children}
    </CustomModal>
  );
};

export default AlertModal;
