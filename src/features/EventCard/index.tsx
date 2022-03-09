import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EVENT_ROUTE } from "../../pages/paths";
import { ButtonOrderDefault } from "../../shared/ui/buttonOrderStyle";
import { ButtonGroup, EventCardContainer, Image } from "./styles";
import { ButtonMore } from "../../shared/ui/buttonMoreStyle";

const EventCard = () => {
  const navigate = useNavigate();

  const id = 0;
  return (
    <EventCardContainer>
      <header>
        <h2>name</h2>
      </header>

      <Image alt="event" />

      <main>
        <hgroup>
          <h5>describeaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa</h5>
          <h3>price1</h3>
          <h3>pr2</h3>
        </hgroup>

        <ButtonGroup>
          <ButtonOrderDefault>Заказать</ButtonOrderDefault>
          <ButtonMore onClick={() => navigate(`${EVENT_ROUTE}/${id}`)}>
            Больше
          </ButtonMore>
        </ButtonGroup>
      </main>
    </EventCardContainer>
  );
};
export default EventCard;
