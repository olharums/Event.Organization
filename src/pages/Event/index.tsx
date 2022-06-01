import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../../app";
import { LOGIN_ROUTE, MAKE_AN_ORDER_ROUTE } from "../paths";
import BackgroungImage from "../../entities/BackgroundImage";
import EmployeeCard from "../../features/EmployeeCard";

import { ButtonOrderBig } from "../../shared/ui/buttonOrderStyle";
import {
  CardListContainer,
  PageContainer,
} from "../../shared/ui/ContainersStyle";
import { Description, ImageContainer } from "./styles";

const Event: FC = observer(() => {
  const param = useParams<{ id?: string }>()?.id;

  const eventStore = useContext(Context)?.eventStore;
  const event =
    eventStore?.currentEvent ||
    eventStore?.events.find((event) => event.id == param);

  const employeeStore = useContext(Context)?.employeeStore;
  const userStore = useContext(Context)?.userStore;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return <PageContainer>Возникла ошибка</PageContainer>;
  }

  return (
    <PageContainer>
      <BackgroungImage image={event.background}>
        <h1>{event.name}</h1>
        <h2>
          Стоимость организации без ПДВ:<span> {event.price} грн.</span>
        </h2>
        <h2>
          Возможная стоимость билета:
          <span> {Math.round(event.price / event.size)} грн.</span>
        </h2>
        <h2>
          Вместимость: <span>{event.size} человек</span>
        </h2>
      </BackgroungImage>

      <ButtonOrderBig
        onClick={() => {
          if (userStore?.isAuth) {
            eventStore?.setCurrentEvent(event);
            navigate(MAKE_AN_ORDER_ROUTE);
          } else {
            navigate(LOGIN_ROUTE);
          }
        }}
      >
        <h2>Заказать мероприятие</h2>
      </ButtonOrderBig>
      <Description>{event.description}</Description>

      <ImageContainer>
        {event.img ? (
          <img
            key="1"
            src={process.env.REACT_APP_API_URL + event.img}
            alt={"event representation"}
          />
        ) : null}
        {event.imgExample1 ? (
          <img
            key="2"
            src={process.env.REACT_APP_API_URL + event.imgExample1}
            alt={"event representation"}
          />
        ) : null}
        {event.imgExample2 ? (
          <img
            key="3"
            src={process.env.REACT_APP_API_URL + event.imgExample2}
            alt={"event representation"}
          />
        ) : null}
        {event.imgExample3 ? (
          <img
            key="4"
            src={process.env.REACT_APP_API_URL + event.imgExample3}
            alt={"event representation"}
          />
        ) : null}
        {event.background ? (
          <img
            key="5"
            src={process.env.REACT_APP_API_URL + event.background}
            alt={"event representation"}
          />
        ) : null}
      </ImageContainer>

      {employeeStore?.getEmployeesByEventId(event?.id ? event?.id : 0)
        ?.length ? (
        <>
          <h2>Наши актёры</h2>

          <CardListContainer>
            {employeeStore
              .getEmployeesByEventId(event.id ? event.id : 0)
              .map((emp) => (
                <EmployeeCard employee={emp} key={emp.id} />
              ))}
          </CardListContainer>
        </>
      ) : null}
    </PageContainer>
  );
});

export default Event;
