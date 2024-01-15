import { useNIKValidator } from "@/hooks/useNIKValidation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import InputNIK from "./InputNIK";

const Login = () => {
  const router = useRouter();
  const inputStyle = "border-2 w-full p-2 rounded-lg";

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      className="w-full py-5 flex flex-col gap-3"
    >
      <InputNIK customClassName={inputStyle} />

      <div>
        <input
          type="password"
          name=""
          id=""
          className={inputStyle}
          placeholder="Sandi"
        />
      </div>
      <button
        type="submit"
        className="font-medium py-2 rounded-lg bg-teal-400 text-white"
      >
        Masuk
      </button>
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
