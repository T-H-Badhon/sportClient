import { Link } from "react-router-dom";
import { TPath, TSidebar } from "../types/routes.types";

export const sidebarGenerator = (items: TPath[], role: string): TSidebar[] => {
  const sidebarItems = items.map((item: TPath) => {
    if (item?.children) {
      const children = sidebarGenerator(item.children, role);

      return {
        key: item.label,
        label: item.label,
        children: children,
      };
    } else {
      return {
        key: item.label,
        label: <Link to={`/${role}/${item.path}`}>{item.label}</Link>,
      };
    }
  });

  return sidebarItems;
};
