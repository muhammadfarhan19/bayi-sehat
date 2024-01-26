import newsCardType from "@/types/newsCardType";
import NewsCard from "./NewsCard";
import newsPic from "@/assets/images/news1.jpg";

const NewsContainer = () => {
  const newsLists: Array<newsCardType> = [
    {
      title: "Apa itu Stunting?",
      url: "/",
      image: newsPic,
    },
    {
      title: "Apa itu Stunting?",
      url: "/",
      image: newsPic,
    },
    {
      title: "Apa itu Stunting?",
      url: "/",
      image: newsPic,
    },
  ];

  return (
    <main className="w-full h-full flex flex-col justify-between items-center">
      {newsLists.map((newslist, index) => (
        <NewsCard
          key={index}
          title={newslist.title}
          image={newslist.image}
          url={newslist.url}
        />
      ))}
    </main>
  );
};

export default NewsContainer;
