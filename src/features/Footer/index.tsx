import { Col, Row } from "react-bootstrap";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col className="text-start">
          <h5>
            <a href="">Контакты</a>
          </h5>

          <h5 className="my-3">
            <a href="">Поддержка</a>
          </h5>
        </Col>

        <Col className="text-end">
          <h5>
            <a href="">Условия использования</a>
          </h5>

          <h5 className="my-3">
            <a href="">Политика конфиденциальности</a>
          </h5>
        </Col>
      </Row>

      <Row className="text-center">
        <Row>
          <h1>LOGO</h1>
        </Row>
        <h6>Copyright © 2022 Oliviera. Все права защищены.</h6>
      </Row>
    </FooterContainer>
  );
};
export default Footer;
