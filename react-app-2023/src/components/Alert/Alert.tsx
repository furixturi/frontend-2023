import { ReactNode } from "react";

interface Props {
  children: ReactNode;
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

const Alert = ({ children, color = "primary" }: Props) => {
  return <div className={"alert alert-" + color}>{children}</div>;
};

export default Alert;
