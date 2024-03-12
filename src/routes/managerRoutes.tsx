import MDashboard from "../pages/dashboard/MDashboard";

import Addproduct from "../pages/productsManagement/addproduct";
import DeleteProducts from "../pages/productsManagement/deleteProducts";
import Products from "../pages/productsManagement/products";
import MSaleReport from "../pages/saleReport/MSaleReport";

export const managerRoutes = [
  {
    label: "Dashboard",
    path: "dashboard",
    element: <MDashboard></MDashboard>,
  },
  {
    label: "Product Management",
    children: [
      {
        label: "Products",
        path: "products",
        element: <Products></Products>,
      },
      {
        label: "Add Products",
        path: "addProduct",
        element: <Addproduct></Addproduct>,
      },
      {
        label: "Delete Product",
        path: "deleteProduct",
        element: <DeleteProducts></DeleteProducts>,
      },
    ],
  },
  {
    label: "Sale Report",
    path: "saleReport",
    element: <MSaleReport></MSaleReport>,
  },
];
