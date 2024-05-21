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
import CreateStuff from "../pages/userManagement/CreateStuff";
import MDashboard from "../pages/dashboard/MDashboard";
import ADashboard from "../pages/dashboard/ADashboard";

const adminRoute = routegenerator(adminRoutes);

const managerRoute = routegenerator(managerRoutes);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes role="">
        <Main></Main>
      </PrivateRoutes>
    ),
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
        path: "dashboard",
        element: <ADashboard></ADashboard>,
      },
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
        path: "dashboard",
        element: <MDashboard></MDashboard>,
      },
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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <CreateStuff></CreateStuff>,
  },
]);

export default router;
