import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  return (
    <nav className="h-14 sm:h-20 w-full flex justify-between items-center p-2 sm:py-5 sm:px-9 bg-teal-500">
      <h1 className="font-bold text-xl sm:text-2xl p-0">bayisehat.com</h1>
      <button className="px-2 py-1 rounded-md border">Nama</button>
    </nav>
  );
};

export default Navbar;
