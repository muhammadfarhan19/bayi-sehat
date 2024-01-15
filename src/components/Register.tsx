import Link from "next/link";
import { usePasswordValidator } from "@/hooks/usePasswordValidation";
import InputField from "./customComponents/InputField";
import Button from "./customComponents/Button";
import { useNIKValidator } from "@/hooks/useNIKValidation";

const Register = () => {
  const {
    password,
    repeatPassword,
    isValidPassword,
    isValidRepeatPassword,
    handlePasswordChange,
    handleRepeatPasswordChange,
  } = usePasswordValidator();
  const { nik, isValidNIK, handleNIKChange } = useNIKValidator();

  const inputStyle = "border-2 w-full p-2 rounded-lg";
  return (
    <form action="" className="w-full flex flex-col gap-3">
      <InputField
        type="text"
        style={inputStyle}
        value={nik}
        validation={isValidNIK}
        handle={handleNIKChange}
        warning="NIK Harus Angka 16 digit"
        placeholder="NIK"
      />
      <div>
        <input
          type="text"
          name=""
          id=""
          className={inputStyle}
          placeholder="Nama Lengkap"
        />
      </div>
      <InputField
        type="password"
        style={inputStyle}
        value={password}
        validation={isValidPassword}
        handle={handlePasswordChange}
        warning="Minimal : 8 Karakter, 1 Kapital, 1 Angka, 1 simbol"
        placeholder="Kata Sandi"
      />
      <InputField
        type="password"
        style={inputStyle}
        value={repeatPassword}
        validation={isValidRepeatPassword}
        handle={handleRepeatPasswordChange}
        warning="Password Harus Sama"
        placeholder="Ulangi Kata Sandi"
      />
      <Button
        style="font-medium py-2 rounded-lg bg-teal-400 text-white"
        value="Daftar"
      />
      <p>
        Sudah memiliki akun?{" "}
        <Link href="/" className="text-blue-500">
          Masuk
        </Link>
      </p>
    </form>
  );
};

export default Register;
