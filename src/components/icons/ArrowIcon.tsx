import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import React from "react";

function ArrowIcon() {
  const { isOpen, handleFunction } = useSidebarToggle();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`lucide lucide-chevron-right ${isOpen && "rotate-180"}`}
      viewBox="0 0 24 24"
    >
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  );
}

export default ArrowIcon;
