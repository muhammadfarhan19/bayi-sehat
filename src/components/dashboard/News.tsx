import { ReactNode } from "react";

const News = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full">
      <header className="pb-5 border-b">
        <h1 className="font-medium sm:text-xl">News Page</h1>
      </header>
      <section className="flex flex-col sm:flex-row w-full justify-center items-center">
        <aside>{children}</aside>
      </section>
    </main>
  );
};

export default News;
