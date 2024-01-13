import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import MonitorIcon from "./icons/MonitorIcon";
import LogoutIcon from "./icons/LogoutIcon";
import NewsIcon from "./icons/NewsIcon";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const paths = router.pathname.split("/");
  const menuItems = [
    {
      id: 1,
      menuLink: "dashboard",
      icon: <HomeIcon />,
      url: "/dashboard",
    },
    {
      id: 2,
      menuLink: "monitoring",
      icon: <MonitorIcon />,
      url: "/dashboard/monitoring",
    },
    {
      id: 3,
      menuLink: "news",
      icon: <NewsIcon />,
      url: "/dashboard/news",
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
      <ul className="h-full flex flex-col px-0 md:p-5">
        {menuItems.map((menuItem) => (
          <Link
            href={menuItem.url}
            key={menuItem.id}
            className={`p-2 flex flex-col md:flex-row gap-1 md:gap-2 items-center md:rounded-md transition-all duration-150 hover:bg-teal-500 ${
              menuItem.menuLink === paths[paths.length - 1] &&
              "bg-teal-400"
            }`}
          >
            {menuItem.icon}
            <span className="text-xs md:text-base capitalize">
              {menuItem.menuLink}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
