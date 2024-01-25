import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "../customComponents/Header";

const Monitoring = ({ children }: { children: ReactNode }) => {
  const route = useRouter();
  return (
    <main className="w-full h-full">
      <Header title={route.asPath} />
      <section className="flex flex-col sm:flex-row w-full justify-center items-center">
        <aside>{children}</aside>
      </section>
    </main>
  );
};

export default Monitoring;
