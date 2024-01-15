import Link from "next/link";
import InputNIK from "./customComponents/InputNIK";

const Register = () => {
  const inputStyle = "border-2 w-full p-2 rounded-lg";
  return (
    <form action="" className="w-full flex flex-col gap-3">
      <InputNIK customClassName={inputStyle} />
      <input
        type="text"
        name=""
        id=""
        className={inputStyle}
        placeholder="Nama Lengkap"
      />
      <input
        type="password"
        name=""
        id=""
        className={inputStyle}
        placeholder="Sandi"
      />
      <input
        type="password"
        name=""
        id=""
        className={inputStyle}
        placeholder="Ulangi Sandi"
      />
      <button className="font-medium py-2 rounded-lg bg-teal-400 text-white">
        Daftar
      </button>
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
