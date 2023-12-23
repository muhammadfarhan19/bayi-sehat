import Link from "next/link";

const Login = () => {
  return (
    <form className="w-full">
      <div className="mb-5 ">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          NIK
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
        />
      </div>
      <div className="mb-5 ">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <p className="mb-5">
        Belum punya akun?
        <Link href="/components/Register" className="text-blue-600">
          {" "}
          Daftar
        </Link>
      </p>
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Masuk
      </button>
    </form>
  );
};

export default Login;
