import { useSidebarToggle } from "@/hooks/useSidebarToggle";

const Hamburger = () => {
  const { isOpen, handleFunction } = useSidebarToggle();
  const hamburgerStyle =
    "w-full h-1 rounded bg-teal-400 transition-all ease-in-out duration-100 bg-white";

  return (
    <div
      className="w-6 py-2 flex flex-col gap-1 cursor-pointer items-center sm:hidden"
      onClick={handleFunction}
    >
      <div
        className={`${hamburgerStyle} ${isOpen && "rotate-45 translate-y-2"}`}
      ></div>
      <div
        className={`${hamburgerStyle} ${isOpen && "opacity-0 -translate-x-10"}`}
      ></div>
      <div
        className={`${hamburgerStyle} ${isOpen && "-rotate-45 -translate-y-2"}`}
      ></div>
    </div>
  );
};

export default Hamburger;
