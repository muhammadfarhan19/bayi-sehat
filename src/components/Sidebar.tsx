import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import MonitorIcon from "./icons/MonitorIcon";
import LogoutIcon from "./icons/LogoutIcon";
import NewsIcon from "./icons/NewsIcon";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      menuLink: "Dashboard",
      icon: <HomeIcon />,
      url: "/dashboard",
    },
    {
      id: 2,
      menuLink: "Monitoring",
      icon: <MonitorIcon />,
      url: "/dashboard/monitoring",
    },
    {
      id: 3,
      menuLink: "Setting",
      icon: <NewsIcon />,
      url: "/dashboard/setting",
    },
    {
      id: 2,
      menuLink: "Logout",
      icon: <LogoutIcon />,
      url: "/",
    },
  ];
  return (
    <div className="w-full h-full">
      <ul className="h-full flex flex-col px-0 sm:p-5">
        {menuItems.map((menuItem) => (
          <Link
            href={menuItem.url}
            key={menuItem.id}
            className="p-2 flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:rounded-md transition-all duration-150 hover:bg-teal-500"
          >
            {menuItem.icon}
            <span className="text-xs sm:text-base">{menuItem.menuLink}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
