import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { Context } from "../../app";
import { EVENT_ROUTE } from "../paths";
import BackgroungImage from "../../entities/BackgroundImage";
import EmployeeCard from "../../features/EmployeeCard";

import { ButtonMoreBig } from "../../shared/ui/buttonMoreStyle";
import {
  CardListContainer,
  PageContainer,
} from "../../shared/ui/ContainersStyle";
import { SubTitle } from "./styles";

const Order: FC = observer(() => {
  const order = useContext(Context)?.orderStore.currentOrder;
  const eventStore = useContext(Context)?.eventStore;
  const employeeStore = useContext(Context)?.employeeStore;

  const navigate = useNavigate();

  const getMore = (id: number) => {
    eventStore?.setCurrentEvent(
      eventStore.events.find((event) => event.id == id)
    );

    navigate(`${EVENT_ROUTE}/${id}`);
  };

  const event = eventStore?.events?.find((event) => event.id == order?.eventId);

  if (!order || !employeeStore || !event) {
    return <PageContainer>Возникла ошибка</PageContainer>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <BackgroungImage image={eventStore?.getBackgroundById(order.eventId)}>
        <h1>{eventStore?.getNameById(order.eventId)}</h1>
        <h2>{order.date}</h2>
        <h2>{order.address}</h2>
        <h2>{Math.round(order.price / event.size)} грн. / билет</h2>
        <h2>Вход {order.publicAccess ? "открытый" : "закрытый"}</h2>
      </BackgroungImage>

      <SubTitle>Выступающие</SubTitle>

      <CardListContainer>
        {order.employeeId.split(", ").map((id) => (
          <EmployeeCard
            employee={employeeStore.employees.find(
              (emp) => emp.id === Number(id)
            )}
            key={id}
          />
        ))}
      </CardListContainer>

      <ButtonMoreBig
        onClick={() => getMore(order.eventId)}
        style={{ width: "fit-content" }}
      >
        <h2>Больше о {eventStore?.getNameById(order.eventId)}</h2>
      </ButtonMoreBig>
    </PageContainer>
  );
});

export default Order;
