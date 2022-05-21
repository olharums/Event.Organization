import { FC, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { EVENT_ROUTE } from "../paths";
import { Context } from "../../app";
import BackgroungImage from "../../entities/BackgroundImage";

import { Text } from "../../shared/ui/textStyle";
import { ButtonMoreBig } from "../../shared/ui/buttonMoreStyle";
import { PageContainer } from "../../shared/ui/ContainersStyle";
import { Avatar } from "./styles";

const EmployeePortfolio: FC = observer(() => {
  const eventStore = useContext(Context)?.eventStore;

  const param = useParams<{ id?: string }>()?.id;

  const employeeStore = useContext(Context)?.employeeStore;
  const employee =
    employeeStore?.currentEmployee ||
    employeeStore?.employees.find((employee) => employee.id == param);

  const navigate = useNavigate();

  const getMore = (id: number) => {
    eventStore?.setCurrentEvent(
      eventStore.events.find((event) => event.id === id)
    );

    navigate(`${EVENT_ROUTE}/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!employee) {
    return <PageContainer>Возникла ошибка</PageContainer>;
  }
  const image = eventStore?.getBackgroundById(employee.eventId);

  return (
    <PageContainer>
      <BackgroungImage image={image ? image : ""}>
        <Avatar src={process.env.REACT_APP_API_URL + employee.img} />
        <h1>
          {employee.name} {employee.surname}
        </h1>
      </BackgroungImage>

      <div
        style={{
          width: "70%",
          margin: "2rem 0 auto",
        }}
      >
        <Text style={{ fontSize: "xx-large", marginTop: "1rem" }}>Цитата</Text>
        <Text>{employee.bio}</Text>
        <Text style={{ fontSize: "xx-large", marginTop: "2rem" }}>
          Род деятельности
        </Text>
        <Text>{employee.category}</Text>
        <Text style={{ fontSize: "xx-large", margin: "2rem 0" }}>
          {`Выступает на мероприятияx ${eventStore?.getNameById(
            employee.eventId
          )}`}
        </Text>
      </div>

      <ButtonMoreBig
        onClick={() => getMore(employee.eventId)}
        style={{ width: "fit-content" }}
      >
        <h2>Больше о {eventStore?.getNameById(employee.eventId)}</h2>
      </ButtonMoreBig>
    </PageContainer>
  );
});

export default EmployeePortfolio;
