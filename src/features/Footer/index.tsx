import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

import { FooterContainer } from "./styles";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Row>
        <Col className="text-start">
          <h5>
            Контакты
            <br />
            <BsTelephone size={"1.5rem"} />
            {"  +380670000000"}
            <br />
            <HiOutlineMail size={"1.8rem"} />
            {"  questions@oliviera.com"}
          </h5>
        </Col>

        <Col className="text-end">
          <h5>
            Сотрудничество
            <br />
            <HiOutlineMail size={"1.8rem"} />
            {"  cooperation@oliviera.com"}
            <br />
            Генеральный офис
            <br />
            <FiMapPin />
            {"  Кривой Рог, "}
            <span>ул. Доватора, </span>
            <span>д. 20</span>
          </h5>
        </Col>
      </Row>

      <Row className="text-center">
        <Row>
          <h1>
            <a className={"a-logo"} href="/">
              OLIVIERA
            </a>
          </h1>
        </Row>
        <h6>
          Copyright © 2022 Oliviera. <span>Все права защищены.</span>
        </h6>
      </Row>
    </FooterContainer>
  );
};
export default Footer;
