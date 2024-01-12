import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SideLoginPage from "./SideLoginPage";

const Welcome = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <main className="sm:p-5 lg:p-10 w-full h-[100dvh]">
      <section className="w-full h-full bg-teal-400 sm:rounded-xl flex justify-center items-center p-5 sm:pe-0">
        <aside className="w-full h-full sm:w-96 p-5 bg-white rounded-xl">
          <section className="flex flex-col justify-center items-center h-full gap-5 w-full">
            <aside className="text-center text-xl font-medium text-teal-400">
              <p>Selamat datang di</p>
              <p>bayisehat.com</p>
            </aside>
            {children}
          </section>
        </aside>
        <SideLoginPage />
      </section>
    </main>
  );
};

export default Welcome;
