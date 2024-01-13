import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-14 sm:h-20 w-full flex justify-between items-center p-2 sm:py-5 sm:px-9 bg-teal-500">
      <Link href="dashboard" className="font-bold text-xl sm:text-2xl p-0 text-white">
        bayisehat.com
      </Link>
      <button className="px-2 py-1 rounded-md border">Nama</button>
    </nav>
  );
};

export default Navbar;
