import SDashboard from "../pages/dashboard/SDashboard";
import SellProduct from "../pages/productsManagement/SellProduct";
import Products from "../pages/productsManagement/products";

export const sellerRoutes = [
  {
    label: "Dashboard",
    path: "dashboard",
    element: <SDashboard />,
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
        label: "Sell Product",
        path: "sellProduct",
        element: <SellProduct></SellProduct>,
      },
    ],
  },
];
