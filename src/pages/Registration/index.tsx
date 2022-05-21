import { FC, useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { Context } from "../../app";
import { LOGIN_ROUTE } from "../paths";

import {
  isValidNumber,
  isValidPassword,
  isValidText,
} from "../../shared/lib/auth";
import { registration } from "../../shared/api/usersAPI";

import { AuthButton, AuthContainer, AuthText } from "../../shared/ui/authStyle";
import { PageContainer } from "../../shared/ui/ContainersStyle";
import { Input } from "../../shared/ui/InputStyle";
import { ErrorMessage } from "../../shared/ui/textStyle";

const Registration: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const userStore = useContext(Context)?.userStore;

  const register = async (e: any) => {
    e.preventDefault();
    if (!name || !surname || !password || !phone) {
      setErrorMessage("Все поля должны быть заполнены!");
      return;
    } else {
      setErrorMessage("");
    }

    try {
      const user = await registration(name, surname, phone, password);

      userStore?.setCurrentUser(user);
      userStore?.setIsAuth(true);

      navigate("/");
    } catch (error: any) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <AuthContainer>
        <h1>Регистрация</h1>
        <Form>
          <Input
            placeholder="Имя"
            onChange={(e) => isValidText(e) && setName(e.target.value)}
            value={name}
          />

          <Input
            placeholder="Фамилия"
            onChange={(e) => isValidText(e) && setSurname(e.target.value)}
            value={surname}
          />

          <Input
            placeholder="Номер телефона"
            onChange={(e) => isValidNumber(e) && setPhone(e.target.value)}
            value={phone}
          />

          <Input
            placeholder="Пароль"
            onChange={(e) => isValidPassword(e) && setPassword(e.target.value)}
            value={password}
            type="password"
          />

          <AuthText>
            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
          </AuthText>

          <ErrorMessage hidden={!errorMessage}>{errorMessage}</ErrorMessage>

          <AuthButton type="submit" onClick={register}>
            <h4>Зарегистрироваться</h4>
          </AuthButton>
        </Form>
      </AuthContainer>
    </PageContainer>
  );
};
export default Registration;
