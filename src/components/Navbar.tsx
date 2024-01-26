import Link from "next/link";
import Hamburger from "./customComponents/Hamburger";

const Navbar = () => {
  return (
    <nav className="h-14 sm:h-20 w-full flex justify-between items-center py-2 px-5 sm:py-5 sm:px-9 bg-teal-500">
      <Hamburger />
      <Link
        href="/dashboard"
        className="font-bold text-xl sm:text-2xl p-0 text-white"
      >
        bayisehat.com
      </Link>
    </nav>
  );
};

export default Navbar;
