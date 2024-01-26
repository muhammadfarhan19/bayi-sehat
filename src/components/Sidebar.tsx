import Link from "next/link";
import HomeIcon from "./icons/HomeIcon";
import MonitorIcon from "./icons/MonitorIcon";
import LogoutIcon from "./icons/LogoutIcon";
import NewsIcon from "./icons/NewsIcon";
import { useRouter } from "next/router";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import ArrowIcon from "./icons/ArrowIcon";

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
  const { isOpen, handleFunction } = useSidebarToggle();

  return (
    <div className="w-full h-full flex flex-col relative rounded-xl">
      <ul className="px-5 py-10">
        {menuItems.map((menuItem, index) => (
          <Link
            href={menuItem.url}
            key={index}
            className={`h-12 px-3 flex items-center justify-start my-1 gap-3 transition-all duration-150 hover:bg-teal-500 rounded-md ${
              menuItem.menuLink === paths[paths.length - 1] &&
              "bg-teal-500 text-black"
            }`}
          >
            <span>{menuItem.icon}</span>
            <span className={`capitalize`}>{menuItem.menuLink}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
