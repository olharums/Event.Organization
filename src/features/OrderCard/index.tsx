import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../app";
import { ORDER_ROUTE } from "../../pages/paths";

import { ButtonMore } from "../../shared/ui/buttonMoreStyle";
import { Text } from "../../shared/ui/textStyle";
import { CardContainer } from "../../shared/ui/ContainersStyle";
import { IOrder } from "../../shared/types/IOrder";
import { Image } from "./styles";

const OrderCard: FC<{ order: IOrder }> = observer(({ order }) => {
  const eventStore = useContext(Context)?.eventStore;
  const orderStore = useContext(Context)?.orderStore;

  const navigate = useNavigate();

  const getMore = (id: number) => {
    orderStore?.setCurrentOrder(
      orderStore.orders.find((order) => order.id === id)
    );

    navigate(`${ORDER_ROUTE}/${id}`);
  };

  const event = eventStore?.events.find((e) => e.id == order.eventId);

  return (
    <CardContainer style={{ margin: "2rem 0.5rem" }}>
      <h3>{eventStore?.getNameById(order.eventId)}</h3>

      {event?.background ? (
        <Image
          alt="event"
          src={process.env.REACT_APP_API_URL + event.background}
        />
      ) : null}

      <main>
        <Text>{order.date}</Text>
        <Text>{order.address}</Text>
        <Text>
          <span>
            {Math.round(order.price / (event?.size || 1))} грн. / билет
          </span>
        </Text>
        <Text>Вход {order.publicAccess ? "открытый" : "закрытый"}</Text>

        <ButtonMore onClick={() => getMore(order.id)}>Больше</ButtonMore>
      </main>
    </CardContainer>
  );
});
export default OrderCard;
