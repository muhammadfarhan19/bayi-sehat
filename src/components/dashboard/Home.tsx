import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "../customComponents/Header";

const Home = () => {
  const route = useRouter();
  return (
    <main className="w-full h-full">
      <Header title={route.asPath} />
      <section className="flex flex-col sm:flex-row w-full justify-center items-center">
        <aside></aside>
      </section>
    </main>
  );
};

export default Home;
