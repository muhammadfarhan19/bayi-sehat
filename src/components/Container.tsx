import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import Sidebar from "./Sidebar";
import BabyIcon from "./icons/BabyIcon";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import MobileSidebar from "./MobileSidebar";

const Container = ({children}: {children: ReactNode}) => {
  const { isOpen, setIsOpen } = useSidebarToggle();
  const route = useRouter();
  return (
    <main className="w-full h-screen flex flex-col sm:flex-row">
      <aside
        className={`h-full hidden sm:flex flex-col transition-all duration-500 border-e ${
          !isOpen ? "w-14" : "w-2/3 sm:w-72"
        }`}
      >
        <Sidebar />
      </aside>
      <aside className="w-full h-screen flex flex-col overflow-y-auto">
        <nav className="h-14 sm:h-20 w-full flex justify-end p-2 sm:py-5 sm:px-9 border-b bg-teal-500">
          <section
            onClick={() => {
              route.push("/dashboard/profile");
            }}
            className="w-auto flex items-center gap-2 p-3 rounded cursor-pointer bg-white transition-all duration-200 hover:shadow-lg"
          >
            <BabyIcon />
            <h1 className="font-medium text-lg">Bayi</h1>
          </section>
        </nav>
        <section className="w-full h-full p-3 sm:p-10">
          {children}
        </section>
      </aside>
      <aside className="fixed bottom-0 sm:hidden">
        <MobileSidebar />
      </aside>
    </main>
  );
};

export default Container;
