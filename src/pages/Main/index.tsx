import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../app";
import { LOGIN_ROUTE, MAKE_AN_ORDER_ROUTE } from "../paths";
import background from "../../shared/static/img/main_page.jpg";
import EventCard from "../../features/EventCard";
import BackgroungImage from "../../entities/BackgroundImage";

import { ButtonOrderBig } from "../../shared/ui/buttonOrderStyle";
import {
  CardListContainer,
  PageContainer,
} from "../../shared/ui/ContainersStyle";

const Main: FC = observer(() => {
  const eventStore = useContext(Context)?.eventStore;
  const userStore = useContext(Context)?.userStore;

  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = "../../shared/static/img/main_page.jpg";

    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <BackgroungImage image={background} isMainPage>
        <h1>Культурный центр</h1>
        <h1>&laquo;Oliviera&raquo;</h1>
      </BackgroungImage>

      <ButtonOrderBig
        onClick={() => {
          if (userStore?.isAuth) {
            navigate(MAKE_AN_ORDER_ROUTE);
          } else {
            navigate(LOGIN_ROUTE);
          }
        }}
      >
        <h2>Заказать мероприятие</h2>
      </ButtonOrderBig>

      <h1>Мы организовываем</h1>
      {eventStore?.events.length ? (
        <CardListContainer>
          {eventStore.events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </CardListContainer>
      ) : (
        <CardListContainer>Информация отсутствует</CardListContainer>
      )}
    </PageContainer>
  );
});

export default Main;
