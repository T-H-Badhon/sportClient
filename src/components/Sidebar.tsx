import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { sidebarGenerator } from "../utilities/sidebarGenerator";
import { adminRoutes } from "../routes/adminRoutes";
import { sellerRoutes } from "../routes/sellerRoutes";
import { managerRoutes } from "../routes/managerRoutes";
import { useAppSelector } from "../redux/hook";

const Sidebar = () => {
  let items;

  const role = useAppSelector((state) => state.auth.role);

  switch (role) {
    case "admin":
      items = sidebarGenerator(adminRoutes, "admin");
      break;
    case "manager":
      items = sidebarGenerator(managerRoutes, "manager");
      break;
    case "seller":
      items = sidebarGenerator(sellerRoutes, "seller");
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
