import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";

// import { PROFILE_ROUTE, TRENDING_FEED_ROUTE } from "../../shared/lib/paths";
// import { userAndFeedDataContext } from "../../app";
import ButtonLog, { ButtonLogText } from "./ButtonLog";
// import { ThemeSwitch } from "./ThemeSwitch";

import { DivStyled, NavbarLinkStyled, NavbarStyled, UserName } from "./styles";
import {
  ANNOUNCE_ROUTE,
  EMPLOYEE_LIST_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../pages/paths";
import EmployeeList from "../../pages/EmployeeList";

interface IButtonEnum {
  [ButtonLogText.logout]: JSX.Element;
  [ButtonLogText.login]: JSX.Element;
}

const NavBar: FC = observer(() => {
  // const user = useContext(userAndFeedDataContext)?.user;

  const BUTTON_LOG_BY_USER_AUTHORIZATION: IButtonEnum = {
    [ButtonLogText.logout]: <ButtonLog text={ButtonLogText.logout} />,
    [ButtonLogText.login]: <ButtonLog text={ButtonLogText.login} />,
  };

  return (
    <NavbarStyled>
      <NavbarLinkStyled to={MAIN_ROUTE}>Главная</NavbarLinkStyled>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Поиск"
          aria-label="Поиск"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Поиск
        </button>
      </div>

      <NavbarLinkStyled to={ANNOUNCE_ROUTE}>Афиша</NavbarLinkStyled>
      <NavbarLinkStyled to={EMPLOYEE_LIST_ROUTE}>Актёры</NavbarLinkStyled>
      <NavbarLinkStyled to={REGISTRATION_ROUTE}>Войти</NavbarLinkStyled>
      {/* <NavbarLinkStyled to={TRENDING_FEED_ROUTE}>Новини</NavbarLinkStyled>

      {user?.isAuth ? (
        <UserName to={PROFILE_ROUTE}>{user.userInfo?.user.nickname}</UserName>
      ) : (
      )}
      <DivStyled>
        {user &&
          BUTTON_LOG_BY_USER_AUTHORIZATION[
            user.isAuth ? ButtonLogText.logout : ButtonLogText.login
          ]}

      </DivStyled> */}
    </NavbarStyled>
  );
});

export default NavBar;
