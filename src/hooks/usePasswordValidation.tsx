import { ReactNode, createContext, useContext, useState } from "react";

interface PasswordContextProps {
  password: string;
  repeatPassword: string;
  isValidPassword: boolean;
  isValidRepeatPassword: boolean;
  handlePasswordChange: (value: string) => void;
  handleRepeatPasswordChange: (value: string) => void;
}

const PasswordContext = createContext<PasswordContextProps | undefined>(
  undefined
);

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  const handleRepeatPasswordChange = (value: string) => {
    setRepeatPassword(value);
    validateRepeatPassword(value)
  };

  const validatePassword = (value: string) => {
    const isValid = value === "" || passwordRegex.test(value);
    setIsValidPassword(isValid);
  };

  const validateRepeatPassword = (value: string) => {
    const isValid = value === password;
    setIsValidRepeatPassword(isValid);
  };

  const contextValue: PasswordContextProps = {
    password,
    repeatPassword,
    isValidPassword,
    isValidRepeatPassword,
    handlePasswordChange,
    handleRepeatPasswordChange,
  };

  return (
    <PasswordContext.Provider value={contextValue}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordValidator = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error("useNIK must be used within a NIKProvider");
  }
  return context;
};
