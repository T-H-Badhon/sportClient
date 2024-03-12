import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";

import { routegenerator } from "../utilities/routeconverter";
import { adminRoutes } from "./adminRoutes";
import { managerRoutes } from "./managerRoutes";
import { sellerRoutes } from "./sellerRoutes";
import Login from "../pages/userManagement/Login";
import UpdateProducts from "../pages/productsManagement/updateProducts";
import CreateDuplicate from "../pages/productsManagement/createDuplicate";
import PrivateRoutes from "./PrivateRoutes";

const adminRoute = routegenerator(adminRoutes);

const managerRoute = routegenerator(managerRoutes);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoutes role="admin">
        <Main></Main>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "updateProduct/:id",
        element: <UpdateProducts></UpdateProducts>,
      },
      {
        path: "createDuplicate/:id",
        element: <CreateDuplicate></CreateDuplicate>,
      },
      ...adminRoute,
    ],
  },
  {
    path: "/manager",
    element: (
      <PrivateRoutes role="manager">
        <Main></Main>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "updateProduct/:id",
        element: <UpdateProducts></UpdateProducts>,
      },
      {
        path: "createDuplicate/:id",
        element: <CreateDuplicate></CreateDuplicate>,
      },
      ...managerRoute,
    ],
  },
  {
    path: "/seller",
    element: (
      <PrivateRoutes role="seller">
        <Main></Main>
      </PrivateRoutes>
    ),
    children: routegenerator(sellerRoutes),
  },
]);

export default router;
