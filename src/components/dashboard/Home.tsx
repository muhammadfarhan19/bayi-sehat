import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <main className="w-full h-full">
      <section className="border-b pb-3">
        <h1 className="font-medium text-base md:text-lg">Muhammad Farhan</h1>
      </section>
      <section className="my-3">
        <h1>Profil bayi</h1>
      </section>
    </main>
  );
};

export default Home;
