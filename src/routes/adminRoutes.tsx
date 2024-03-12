import ADashboard from "../pages/dashboard/ADashboard";
import Addproduct from "../pages/productsManagement/addproduct";
import DeleteProducts from "../pages/productsManagement/deleteProducts";
import Products from "../pages/productsManagement/products";
import ASaleReport from "../pages/saleReport/ASaleReport";
import CreateStuff from "../pages/userManagement/CreateStuff";

export const adminRoutes = [
  {
    label: "Dashboard",
    path: "dashboard",
    element: <ADashboard></ADashboard>,
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
    element: <ASaleReport></ASaleReport>,
  },
  {
    label: "User Management",
    children: [
      {
        label: "Create staff",
        path: "createStaff",
        element: <CreateStuff></CreateStuff>,
      },
    ],
  },
];
