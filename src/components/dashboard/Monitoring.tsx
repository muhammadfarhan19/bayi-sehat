import { useRouter } from "next/router";
import { ReactNode } from "react";

const Monitoring = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <main className="w-full h-full">
      <header className="pb-5 border-b">
        <h1 className="font-medium sm:text-xl">Halaman Monitoring</h1>
      </header>
      <section className="flex flex-col sm:flex-row w-full justify-center items-center">
        <aside>{children}</aside>
      </section>
    </main>
  );
};

export default Monitoring;
