import { useRouter } from "next/router";
import Header from "../customComponents/Header";
import WeeklyChart from "../contents/monitoring/WeeklyChart";

const Home = () => {
  const route = useRouter();
  return (
    <main className="w-full h-full">
      <Header title={route.asPath} />
      <section className="flex flex-col sm:flex-row w-full justify-center items-center">
        <WeeklyChart />
      </section>
    </main>
  );
};

export default Home;
