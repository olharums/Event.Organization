import { MainContent } from "./styles";
import background from "../../shared/static/img/main_page.jpg";
import { Button } from "react-bootstrap";
import EventCard from "../../features/EventCard";
import BackgroungImage from "../../entities/BackgroundImage";
import { ButtonOrderBig } from "../../shared/ui/buttonOrderStyle";
import { useEffect } from "react";
import { CardListContainer } from "../../shared/ui/cardListContainer";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BackgroungImage image={background}>
        <h1>Культурный центр</h1>
        <h1>&laquo;Oliviera&raquo;</h1>
      </BackgroungImage>

      <MainContent>
        <ButtonOrderBig>
          <h2>Заказать мероприятие</h2>
        </ButtonOrderBig>

        <h1>Мы организовываем</h1>
        <CardListContainer>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </CardListContainer>
      </MainContent>
    </div>
  );
};

export default Main;
