import Sidebar from "./Sidebar";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import { useSidebarToggle } from "@/hooks/useSidebarToggle";

const Container = ({ children }: { children: ReactNode }) => {
  const { isOpen, setIsOpen } = useSidebarToggle();

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="flex w-full h-full relative p-1 sm:p-5">
        <aside className="w-full ml-11 px-3 sm:px-5 border">{children}</aside>
        <aside
          className={`absolute bg-teal-500 h-full transition-all ease-in-out duration-100 rounded ${
            isOpen ? "w-3/4 sm:w-96" : "w-10 sm:w-11"
          }`}
        >
          <Sidebar />
        </aside>
      </section>
    </main>
  );
};

export default Container;
