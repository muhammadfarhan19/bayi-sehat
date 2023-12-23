import Link from "next/link"
import ArrowIcon from "./icons/ArrowIcon"
import BabyIcon from "./icons/BabyIcon"
import HomeIcon from "./icons/HomeIcon";
import MonitorIcon from "./icons/MonitorIcon";
import SettingIcon from "./icons/SettingICon";
import LogoutIcon from "./icons/LogoutIcon";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

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
      url: "/home/Dashboard",
    },
    {
      id: 2,
      menuLink: "Monitoring",
      icon: <MonitorIcon />,
      url: "/home/Monitoring",
    },
    {
      id: 3,
      menuLink: "Setting",
      icon: <SettingIcon />,
      url: "/home/Setting",
    },
    {
      id: 2,
      menuLink: "Logout",
      icon: <LogoutIcon />,
      url: "/",
    },
  ];
  return (
    <aside
      className={`w-2/3 sm:w-72 h-full flex flex-col bg-slate-200 transition-all duration-500 ${
        !isOpen && "w-16 sm:w-16"
      }`}
    >
      <section
        className={`flex justify-between items-center w-full ps-5 py-3 ${
          !isOpen && "ps-4"
        }`}
      >
        <div className="flex items-center gap-2 w-auto">
          <BabyIcon />
          <h1 className={`font-bold text-2xl ${!isOpen && "hidden"}`}>
            bayisehat.com
          </h1>
        </div>
        <button
          onClick={handleToggle}
          className={`p-1.5 -me-5 -mb-14 bg-blue-600 rounded-full transition-all ${
            !isOpen && "rotate-180"
          }`}
        >
          <ArrowIcon />
        </button>
      </section>
      <section className="w-full flex-grow py-5 px-3">
        <ul className="h-full flex flex-col relative">
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.url}
              key={menuItem.id}
              className="p-2 border flex gap-2 rounded-md transition-all duration-150 hover:bg-slate-300"
            >
              {menuItem.icon}{" "}
              <span className={`${!isOpen && "hidden"}`}>
                {menuItem.menuLink}
              </span>
            </Link>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar;
