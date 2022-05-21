import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { Context } from "../../app";
import { EMPLOYEE_LIST_ROUTE } from "../../pages/paths";
import { IEmployee } from "../../shared/types/IEmployee";

import { ButtonMore } from "../../shared/ui/buttonMoreStyle";
import { CardContainer } from "../../shared/ui/ContainersStyle";
import { Text } from "../../shared/ui/textStyle";
import { Image } from "./styles";

const EmployeeCard: FC<{ employee: IEmployee | undefined }> = observer(
  ({ employee }) => {
    const eventStore = useContext(Context)?.eventStore;
    const employeeStore = useContext(Context)?.employeeStore;

    const navigate = useNavigate();

    const getMore = (employee: IEmployee) => {
      employeeStore?.setCurrentEmployee(employee);

      navigate(`${EMPLOYEE_LIST_ROUTE}/${employee.id}`);
    };

    if (!employee) {
      return null;
    }

    return (
      <CardContainer>
        <Image
          alt="employee"
          src={process.env.REACT_APP_API_URL + employee.img}
        />

        <header>
          <h2>
            {employee.name} {employee.surname}
          </h2>
        </header>

        <main>
          <Text>{employee.category}</Text>
          <Text>{eventStore?.getNameById(employee.eventId)}</Text>

          <ButtonMore onClick={() => getMore(employee)}>Больше</ButtonMore>
        </main>
      </CardContainer>
    );
  }
);
export default EmployeeCard;
