import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../app";
import {
  EVENT_ROUTE,
  LOGIN_ROUTE,
  MAKE_AN_ORDER_ROUTE,
} from "../../pages/paths";

import { ButtonOrderDefault } from "../../shared/ui/buttonOrderStyle";
import { ButtonMore } from "../../shared/ui/buttonMoreStyle";
import { Text } from "../../shared/ui/textStyle";
import { CardContainer } from "../../shared/ui/ContainersStyle";
import { IEvent } from "../../shared/types/IEvent";
import { ButtonGroup, Image } from "./styles";

const EventCard: FC<{ event: IEvent }> = observer(({ event }) => {
  const eventStore = useContext(Context)?.eventStore;
  const userStore = useContext(Context)?.userStore;

  const navigate = useNavigate();

  const getMore = (id: number) => {
    eventStore?.setCurrentEvent(
      eventStore.events.find((event) => event.id === id)
    );

    navigate(`${EVENT_ROUTE}/${id}`);
  };

  return (
    <CardContainer>
      <h4>{event.name}</h4>

      <Image alt="event" src={process.env.REACT_APP_API_URL + event.img} />

      <Text>
        Стоимость: <span>{event.price} грн.</span>
      </Text>
      <Text>
        Вместимость: <span>{event.size} человек</span>
      </Text>

      <ButtonGroup>
        <ButtonOrderDefault
          onClick={() => {
            if (userStore?.isAuth) {
              eventStore?.setCurrentEvent(event);
              navigate(MAKE_AN_ORDER_ROUTE);
            } else {
              navigate(LOGIN_ROUTE);
            }
          }}
        >
          Заказать
        </ButtonOrderDefault>

        <ButtonMore onClick={() => getMore(event.id ? event.id : 0)}>
          Больше
        </ButtonMore>
      </ButtonGroup>
    </CardContainer>
  );
});
export default EventCard;
