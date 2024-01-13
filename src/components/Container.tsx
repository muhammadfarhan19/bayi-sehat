import Sidebar from "./Sidebar";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="flex w-full h-full">
        <aside className="w-20 md:w-64 border-e">
          <Sidebar />
        </aside>
        <aside className="w-full p-5 md:p-10">{children}</aside>
      </section>
    </main>
  );
};

export default Container;
