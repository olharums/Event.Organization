import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../app";
import OrderCard from "../../features/OrderCard";

import {
  CardListContainer,
  EmptyContainer,
} from "../../shared/ui/ContainersStyle";
import { Container } from "./styles";

const Announce: FC = observer(() => {
  const orderStore = useContext(Context)?.orderStore;
  const userStore = useContext(Context)?.userStore;

  const isOrders = !!orderStore?.orders?.length;

  const userOrders = orderStore?.orders.filter(
    (order) => order.userId == userStore?.currentUser?.id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <h1>Афиша</h1>

      {userOrders?.length ? (
        <>
          <h2>Ваши заказы</h2>

          <CardListContainer>
            {userOrders.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </CardListContainer>
        </>
      ) : null}

      {isOrders ? (
        <>
          {userOrders?.length ? <h2>Остальные мероприятия</h2> : null}

          <CardListContainer>
            {orderStore?.orders.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </CardListContainer>
        </>
      ) : (
        <EmptyContainer>Информация отсутствует</EmptyContainer>
      )}
    </Container>
  );
});

export default Announce;
