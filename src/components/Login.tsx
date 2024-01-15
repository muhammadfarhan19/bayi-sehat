import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "./customComponents/Button";
import InputField from "./customComponents/InputField";
import { useNIKValidator } from "@/hooks/useNIKValidation";
import { usePasswordValidator } from "@/hooks/usePasswordValidation";

const Login = () => {
  const router = useRouter();
  const { nik, isValidNIK, handleNIKChange } = useNIKValidator();
  const { password, isValidPassword, handlePasswordChange } =
    usePasswordValidator();
  const inputStyle = "border-2 w-full p-2 rounded-lg";

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmitLogin} className="w-full flex flex-col gap-3">
      <InputField
        type="text"
        style={inputStyle}
        value={nik}
        validation={isValidNIK}
        handle={handleNIKChange}
        warning="NIK Harus Angka 16 digit"
        placeholder="NIK"
      />
      <InputField
        type="password"
        style={inputStyle}
        value={password}
        validation={isValidPassword}
        handle={handlePasswordChange}
        warning="Minimal : 8 Karakter, 1 Kapital, 1 Angka, 1 simbol"
        placeholder="Kata Sandi"
      />
      <Button
        style="font-medium py-2 rounded-lg bg-teal-400 text-white"
        value="Masuk"
      />
      <p>
        Belum memiliki akun?{" "}
        <Link href="register" className="text-blue-500">
          Daftar
        </Link>
      </p>
    </form>
  );
};

export default Login;
