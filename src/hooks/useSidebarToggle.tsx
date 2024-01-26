import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarToggleContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleFunction: () => void;
}

const SidebarToggleContext = createContext<
  SidebarToggleContextProps | undefined
>(undefined);

const SidebarToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFunction = () => setIsOpen(!isOpen);

  return (
    <SidebarToggleContext.Provider
      value={{ isOpen, setIsOpen, handleFunction }}
    >
      {children}
    </SidebarToggleContext.Provider>
  );
};

const useSidebarToggle = () => {
  const context = useContext(SidebarToggleContext);

  if (!context) {
    throw new Error(
      "useSidebarToggle must be used within a SidebarToggleProvider"
    );
  }

  return context;
};

export { SidebarToggleProvider, useSidebarToggle };
