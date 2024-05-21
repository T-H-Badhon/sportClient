import React from "react";
import { useAppSelector } from "../redux/hook";
import Login from "../pages/userManagement/Login";

type TProps = {
  children: React.ReactNode;
  role: string;
};

const PrivateRoutes = ({ children, role }: TProps) => {
  const userRole = useAppSelector((state) => state.auth.role);

  if (userRole && userRole == role) {
    return children;
  } else {
    return <Login></Login>;
  }
};

export default PrivateRoutes;
