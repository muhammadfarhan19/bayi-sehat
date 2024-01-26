import newsCardType from "@/types/newsCardType";
import Image from "next/image";

const NewsCard = ({ image, title, url }: newsCardType) => {
  return (
    <section className="h-40 w-full md:w-4/5 flex flex-col sm:flex-row rounded-lg shadow">
      <aside className="w-full h-3/4 sm:w-1/4 sm:h-full">
        <Image src={image} alt="" className="max-w-full object-contain"/>
      </aside>
      <aside className="h-1/4 sm:h-full w-full sm:w-3/4 flex sm:flex-col sm:items-start sm:px-5 border justify-around items-center">
        <h1>{title}</h1>
        <a href={url} className="text-blue-600 underline">
          Selengkapnya
        </a>
      </aside>
    </section>
  );
};

export default NewsCard;
