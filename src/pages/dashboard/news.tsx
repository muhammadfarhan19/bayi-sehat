import Container from "@/components/Container";
import NewsContainer from "@/components/contents/news";
import News from "@/components/dashboard/News";

const SettingPage = () => {
  return (
    <Container>
      <News>
        <NewsContainer />
      </News>
    </Container>
  );
};

export default SettingPage;
