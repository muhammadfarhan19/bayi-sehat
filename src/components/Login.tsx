import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const inputStyle = "border-2 w-full p-2 rounded-lg";
  return (
    <form action="" className="w-full py-5 flex flex-col gap-3">
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
      <button
        type="submit"
        onClick={() => {
          router.push("/dashboard");
        }}
        className="font-medium py-2 rounded-lg bg-teal-400 text-white"
      >
        Masuk
      </button>
      <p>
        Belum memiliki akun?{" "}
        <a
          href="register"
          className="text-blue-500"
          onClick={() => router.push("/register")}
        >
          Daftar
        </a>
      </p>
    </form>
  );
};

export default Login;
