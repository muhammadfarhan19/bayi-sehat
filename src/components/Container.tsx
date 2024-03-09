import Sidebar from "./Sidebar";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

const Container = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useSidebarToggle();

  useEffect(() => {
    window.innerWidth > 640 ? setIsOpen(true) : setIsOpen(false);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="flex w-full h-full relative gap-5 lg:gap-10 p-5 sm:p-8">
        <aside
          className={`bg-slate-50 h-full w-80 border absolute transition-all ease-in-out duration-200 rounded-xl md:block md:relative
          ${isOpen ? "translate-x-0" : "-translate-x-96 md:translate-x-0"}`}
        >
          <Sidebar />
        </aside>
        <aside className="w-full bg-slate-50 py-5 sm:py-12 px-5 rounded-xl">
          {children}
        </aside>
      </section>
    </main>
  );
};

export default Container;
