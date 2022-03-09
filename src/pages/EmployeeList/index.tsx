import EmployeeCard from "../../features/EmployeeCard";
import { CardListContainer } from "../../shared/ui/cardListContainer";
import { Container } from "./styles";

const EmployeeList = () => {
  return (
    <Container>
      <header>
        <h1>Наши работники</h1>
      </header>
      <CardListContainer>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </CardListContainer>
    </Container>
  );
};

export default EmployeeList;
