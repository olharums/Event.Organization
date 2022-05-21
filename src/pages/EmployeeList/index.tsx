import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";

import { Context } from "../../app";
import EmployeeCard from "../../features/EmployeeCard";

import {
  CardListContainer,
  EmptyContainer,
} from "../../shared/ui/ContainersStyle";
import { Container } from "./styles";

const EmployeeList: FC = observer(() => {
  const employeeStore = useContext(Context)?.employeeStore;

  const isEmployees = !!employeeStore?.employees?.length;

  return (
    <Container>
      <header>
        <h1>Наши работники</h1>
      </header>

      {isEmployees ? (
        <CardListContainer>
          {employeeStore?.employees.map((emp) => (
            <EmployeeCard employee={emp} key={emp.id} />
          ))}
        </CardListContainer>
      ) : (
        <EmptyContainer>Информация отсутствует</EmptyContainer>
      )}
    </Container>
  );
});

export default EmployeeList;
