import React, { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { Context } from "../../app";
import { REGISTRATION_ROUTE } from "../paths";

import { login } from "../../shared/api/usersAPI";
import { isValidNumber, isValidPassword } from "../../shared/lib/auth";
import { AuthButton, AuthContainer, AuthText } from "../../shared/ui/authStyle";
import { PageContainer } from "../../shared/ui/ContainersStyle";
import { ErrorMessage } from "../../shared/ui/textStyle";
import { Input } from "../../shared/ui/InputStyle";

const Login: FC = observer(() => {
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const userStore = useContext(Context)?.userStore;

  const logIn = async (e: any) => {
    e.preventDefault();

    if (!password || !phone) {
      setErrorMessage("Все поля должны быть заполнены!");

      return;
    } else {
      setErrorMessage("");
    }

    try {
      const user = await login(phone, password);

      userStore?.setCurrentUser(user);
      userStore?.setIsAuth(true);

      navigate(user.isAdmin ? "/admin" : "/");
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
        <h1>Вход</h1>
        <Form>
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
            {"Нет аккаунта? "}
            <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться!</NavLink>
          </AuthText>

          <ErrorMessage hidden={!errorMessage}>{errorMessage}</ErrorMessage>

          <AuthButton type="submit" onClick={logIn}>
            <h4>Войти</h4>
          </AuthButton>
        </Form>
      </AuthContainer>
    </PageContainer>
  );
});
export default Login;
