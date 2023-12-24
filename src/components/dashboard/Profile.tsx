const Profile = () => {
  const inputStyle = "w-full p-2 border-2 border-emerald-500 rounded-lg";
  const inputGroupStyle =
    "w-full lg:w-3/4 flex flex-col sm:flex-row items-center gap-2 sm:gap-5";
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
    <div className="flex flex-col justify-between pb-16 sm:p-0">
      <header>
        <h1 className="text-xl sm:text-2xl font-medium">Info Personal</h1>
      </header>
      <section>
        <form action="" className="p-3 flex flex-col gap-5">
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-72" htmlFor="">
              Nama Bayi
            </label>
            <section className="border w-full flex gap-3">
              <input
                className={`${inputStyle} sm:w-1/2`}
                type="text"
                value="Nama"
              />
              <input
                className={`${inputStyle} sm:w-1/2`}
                type="text"
                value="Bayi"
              />
            </section>
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-72" htmlFor="">
              Tanggal lahir
            </label>
            <section className="border w-full flex gap-3">
              <select className={`${inputStyle} sm:w-1/3`}>
                {date.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select className={`${inputStyle} sm:w-1/3`}>
                {months.map((month, i) => (
                  <option value={month} key={i}>
                    {month}
                  </option>
                ))}
              </select>
              <input
                className={`${inputStyle} sm:w-1/3`}
                type="text"
                value="Tahun"
              />
            </section>
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-72" htmlFor="">
              Jenis Kelamin
            </label>
            <section className="w-full border">
              <select className={`${inputStyle} `}>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </section>
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-72" htmlFor="">
              Nama Orang Tua
            </label>
            <section className="border w-full flex gap-3">
              <input
                className={`${inputStyle} sm:w-1/2`}
                type="text"
                value="Nama Depan"
              />
              <input
                className={`${inputStyle} sm:w-1/2`}
                type="text"
                value="Nama Belakang"
              />
            </section>
          </div>
          <div className={`${inputGroupStyle}`}>
            <label className="w-full sm:w-72" htmlFor="">
              Alamat
            </label>
            <section className="border w-full flex flex-wrap gap-3">
              <select className={`${inputStyle} sm:w-1/2`}>
                {date.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select className={`${inputStyle} sm:w-1/2`}>
                {months.map((month, i) => (
                  <option value={month} key={i}>
                    {month}
                  </option>
                ))}
              </select>
              <select className={`${inputStyle} sm:w-1/2`}>
                {date.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select className={`${inputStyle} sm:w-1/2`}>
                {months.map((month, i) => (
                  <option value={month} key={i}>
                    {month}
                  </option>
                ))}
              </select>
            </section>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
