import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const HomePage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen">
      <Sidebar />
      {children}
    </main>
  );
};
export default HomePage;
