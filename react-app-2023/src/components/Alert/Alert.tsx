import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  isVisible?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Alert = ({ children, isVisible = false, color = "primary" }: Props) => {
  // state hooks
  return (
    <div
      className={
        "alert alert-dismissible fade alert-" + color + (isVisible && " show")
      }
    >
      {children}
    </div>
  );
};

export default Alert;
