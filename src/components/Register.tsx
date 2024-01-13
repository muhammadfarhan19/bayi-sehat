import Link from "next/link";

const Register = () => {
  const inputStyle = "border-2 w-full p-2 rounded-lg";
  return (
    <form action="" className="w-full py-5 flex flex-col gap-3">
      <input
        type="text"
        name=""
        id=""
        className={inputStyle}
        placeholder="Nama lengkap"
      />
      <input
        type="text"
        name=""
        id=""
        className={inputStyle}
        placeholder="NIK"
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
