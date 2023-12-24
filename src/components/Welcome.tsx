import Login from "@/components/Login";
import Register from "@/components/Register";
import { useState } from "react";

export default function Welcome() {
  const [isRegistered, setIsRegistered] = useState(false)
  return (
    <main className="grid place-items-center p-5 w-full h-screen">
      <section className="flex flex-col justify-between w-full h-auto sm:w-3/4 md:w-3/5 lg:w-2/5 rounded-xl shadow-2xl">
        <aside className="w-full flex justify-between bg-teal-500 rounded-t-lg px-3 py-4">
          <h1 className="text-3xl font-medium text-white">
            {isRegistered ? "Login" : "Daftar"}
          </h1>
          <button className="border px-2 rounded text-white" onClick={() => {setIsRegistered(!isRegistered)}}>
            {isRegistered ? "Daftar" : "Login"}
          </button>
        </aside>
        <aside className="w-full h-full p-5 grid place-items center">
          {isRegistered ? <Login /> : <Register />}
        </aside>
      </section>
    </main>
  );
}
