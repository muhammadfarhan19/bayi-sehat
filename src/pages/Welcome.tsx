import Link from "next/link";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

const Welcome = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <section className="flex flex-col justify-between w-full h-auto sm:w-3/4 md:w-3/5 lg:w-2/5 rounded-xl shadow-2xl">
      <aside className="w-full bg-blue-600 rounded-t-lg px-3 py-4">
        <h1 className="text-3xl font-medium text-white">
          {isRegistered ? "Login" : "Register"}
        </h1>
      </aside>
      <aside className="w-full h-full p-5 grid place-items center">
        {isRegistered ? <Login /> : <Register />}
      </aside>
    </section>
  );
};

export default Welcome;
