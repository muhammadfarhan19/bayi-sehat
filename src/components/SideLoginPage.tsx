import ImageContainer from "./customComponents/ImageContainer";

const SideLoginPage = () => (
  <aside className="h-full sm:w-full hidden sm:flex flex-col gap-10 justify-center items-center">
    <ImageContainer customClassName="sm:w-3/4 md:w-1/2 lg:w-2/5" />
    <section className="text-center text-2xl font-bold text-white ">
      <p>Sayangi Anak Kita</p>
      <p>Cegah Stunting Sejak Dini</p>
    </section>
  </aside>
);

export default SideLoginPage;
