const Profile = () => {
  const inputStyle = "w-full p-2 border-2 border-emerald-500 rounded-lg";
  const inputGroupStyle =
    "w-full lg:w-3/4 flex flex-col sm:flex-row items-center gap-2";
  const date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="flex flex-col justify-between border">
      <header>
        <h1 className="text-xl sm:text-2xl font-medium">Info Personal</h1>
      </header>
      <section>
        <form action="" className="p-3 flex flex-col gap-5">
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-40" htmlFor="">
              Nama Bayi
            </label>
            <input
              className={`${inputStyle} sm:w-2/5`}
              type="text"
              value="Nama"
            />
            <input
              className={`${inputStyle} sm:w-2/5`}
              type="text"
              value="Bayi"
            />
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-40" htmlFor="">
              Tanggal lahir
            </label>
            <select className={`${inputStyle} sm:w-1/5`}>
              {date.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
            <select className={`${inputStyle} sm:w-1/5`}>
              {months.map((month, i) => (
                <option value={month} key={i}>
                  {month}
                </option>
              ))}
            </select>
            <input
              className={`${inputStyle} sm:w-1/5`}
              type="text"
              value="Tahun"
            />
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-40" htmlFor="">
              Jenis Kelamin
            </label>
            <select
              className={`${inputStyle}`}
            >
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
