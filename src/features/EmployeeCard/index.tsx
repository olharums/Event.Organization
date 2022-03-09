import { useNavigate } from "react-router-dom";
import { EMPLOYEE_LIST_ROUTE } from "../../pages/paths";
import { ButtonMore } from "../../shared/ui/buttonMoreStyle";
import { EmployeeCardContainer, Image } from "./styles";

const EmployeeCard = () => {
  const navigate = useNavigate();

  const id = 0;
  return (
    <EmployeeCardContainer>
      <Image alt="employee" />

      <header>
        <h2>name</h2>
      </header>

      <main>
        <p>categoty</p>
        <p>events</p>

        <ButtonMore onClick={() => navigate(`${EMPLOYEE_LIST_ROUTE}/${id}`)}>
          Больше
        </ButtonMore>
      </main>
    </EmployeeCardContainer>
  );
};
export default EmployeeCard;
