import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const Container = ({ children }: { children: ReactNode }) => {
  const route = useRouter();
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <section className="flex w-full h-full">
        <aside className="w-20 sm:w-64 border">
          <Sidebar />
        </aside>
        <aside>{children}</aside>
      </section>
    </main>
  );
};

export default Container;
