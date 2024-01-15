import React, { ReactNode, createContext, useContext, useState } from "react";

interface NIKContextProps {
  nik: string;
  isValidNIK: boolean;
  handleNIKChange: (value: string) => void;
}

const NIKContext = createContext<NIKContextProps | undefined>(undefined);

export const NIKValidatorProvider = ({ children }: { children: ReactNode }) => {
  const [nik, setNIK] = useState("");
  const [isValidNIK, setIsValidNIK] = useState(true);

  const NIKRegex = /^\d{16}$/;

  const handleNIKChange = (value: string) => {
    const NIKNumber = value.replace(/\D/g, "");
    setNIK(NIKNumber);
    validateNIK(NIKNumber);
  };

  const validateNIK = (value: string) => {
    const isValid = value === "" || NIKRegex.test(value);
    setIsValidNIK(isValid);
  };

  const contextValue: NIKContextProps = {
    nik,
    isValidNIK,
    handleNIKChange,
  };

  return (
    <NIKContext.Provider value={contextValue}>{children}</NIKContext.Provider>
  );
};

export const useNIKValidator = () => {
  const context = useContext(NIKContext);
  if (!context) {
    throw new Error("useNIK must be used within a NIKProvider");
  }
  return context;
};
