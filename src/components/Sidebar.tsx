import Link from "next/link";
import BabyIcon from "./icons/BabyIcon";
import HomeIcon from "./icons/HomeIcon";
import MonitorIcon from "./icons/MonitorIcon";
import SettingIcon from "./icons/SettingICon";
import LogoutIcon from "./icons/LogoutIcon";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import HamburgerIcon from "./icons/HamburgerIcon";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarToggle();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
    <div className="w-full h-full">
      <section
        className={`flex justify-between gap-3 items-center w-full py-2 sm:py-5 border-b ${
          !isOpen ? "px-2" : "px-3"
        }`}
      >
        <div
          className={`flex items-center gap-1 w-auto  ${!isOpen && "hidden"}`}
        >
          <BabyIcon />
          <h1 className={`font-bold text-xl sm:text-2xl`}>bayisehat.com</h1>
        </div>
        <button
          onClick={handleToggle}
          className="transition-all duration-200 rounded-full p-2 hover:bg-emerald-500"
        >
          <HamburgerIcon />
        </button>
      </section>
      <section className={`w-full flex-grow py-8 sm:py-10 ${!isOpen ? "px-2" : "px-3"}`}>
        <ul className="h-full flex flex-col ">
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.url}
              key={menuItem.id}
              className={`py-3 flex gap-2 items-center rounded-md transition-all duration-150 hover:bg-emerald-500 ${
                !isOpen ? "px-2 py-2 justify-center " : "px-3"
              }`}
            >
              {menuItem.icon}{" "}
              <span className={`${!isOpen && "hidden"}`}>
                {menuItem.menuLink}
              </span>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
