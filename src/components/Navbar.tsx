import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-14 sm:h-20 w-full flex justify-center items-center p-2 sm:py-5 sm:px-9 border-b border-teal-500">
      <Link
        href="/dashboard"
        className="font-bold text-xl sm:text-2xl p-0 text-teal-500"
      >
        bayisehat.com
      </Link>
    </nav>
  );
};

export default Navbar;
