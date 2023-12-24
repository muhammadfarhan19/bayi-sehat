import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import LogoutIcon from "./icons/LogoutIcon";
import MonitorIcon from "./icons/MonitorIcon";
import SettingIcon from "./icons/SettingICon";

const MobileSidebar = () => {
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
      icon: <SettingIcon />,
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
    <nav className="w-full flex flex-row-reverse justify-around items-center border-t bg-white fixed bottom-0">
      {menuItems.map((menuItem) => (
        <Link
          href={menuItem.url}
          key={menuItem.id}
          className="h-full flex flex-col items-center justify-center p-3 hover:bg-emerald-500"
        >
          {menuItem.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MobileSidebar;
