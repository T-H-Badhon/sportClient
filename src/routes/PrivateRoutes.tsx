import React from "react";
import { useAppSelector } from "../redux/hook";
import Login from "../pages/userManagement/Login";

type TProps = {
  children: React.ReactNode;
  role: string;
};

const PrivateRoutes = ({ children, role }: TProps) => {
  const userRole = useAppSelector((state) => state.auth.role);

  if (userRole != role) {
    return <Login></Login>;
  } else {
    return children;
  }
};

export default PrivateRoutes;
