import { useEffect } from "react";
import BackgroungImage from "../../entities/BackgroundImage";
import EmployeeCard from "../../features/EmployeeCard";
import background from "../../shared/static/img/main_page.jpg";
import { ButtonOrderBig } from "../../shared/ui/buttonOrderStyle";
import {
  Description,
  EmployeeContainer,
  EventContainer,
  ImageContainer,
} from "./styles";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <EventContainer>
      <BackgroungImage image={background}>
        <h1>name</h1>
        <h2>price small</h2>
        <h2>price big</h2>
      </BackgroungImage>

      <ButtonOrderBig>
        <h2>Заказать мероприятие</h2>
      </ButtonOrderBig>
      <Description>description</Description>

      <ImageContainer>
        <img key="1" src={background} />
        <img key="2" src={background} />
        <img key="3" src={background} />
        <img key="4" src={background} />
        <img key="5" src={background} />
      </ImageContainer>

      <h2>Наши актёры</h2>

      <EmployeeContainer>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </EmployeeContainer>
    </EventContainer>
  );
};

export default Event;
