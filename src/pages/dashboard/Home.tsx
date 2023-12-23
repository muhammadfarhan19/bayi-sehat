const Home = () => {
  return (
    <main className="w-full h-screen">
      <aside className="w-2/3 sm:w-72 h-full bg-blue-600">
        <section className="w-full p-3 border">
          <h1 className="font-bold text-2xl">bayisehat.com</h1>
        </section>
        <section className="w-full">
          <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Monitoring</a></li>
            <li><a href="">setting</a></li>
            <li><a href="">Logout</a></li>
          </ul>
        </section>
      </aside>
    </main>
  );
};

export default Home;
