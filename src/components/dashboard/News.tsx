import { ReactNode } from "react";
import Header from "../customComponents/Header";
import { useRouter } from "next/router";

const News = ({ children }: { children: ReactNode }) => {
  const route = useRouter();
  return (
    <main className="w-full h-full">
      <Header title={route.asPath} />
      {children}
    </main>
  );
};

export default News;
