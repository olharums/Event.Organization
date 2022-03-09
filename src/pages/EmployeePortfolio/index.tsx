import { useEffect } from "react";
import BackgroungImage from "../../entities/BackgroundImage";
import { Avatar, EmployeeContainer, Text } from "./styles";
import background from "../../shared/static/img/main_page.jpg";

const EmployeePortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <EmployeeContainer>
      <BackgroungImage image={background}>
        <Avatar src={background} />
        <h1>name</h1>
      </BackgroungImage>

      <main>
        <Text>bio</Text>
        <Text>categ</Text>
        <Text>event name</Text>
      </main>
    </EmployeeContainer>
  );
};

export default EmployeePortfolio;
