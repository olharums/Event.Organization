import Admin from "./Admin";
import Announce from "./Announce";
import EmployeeList from "./EmployeeList";
import EmployeePortfolio from "./EmployeePortfolio";
import Event from "./Event";
import Login from "./Login";
import Main from "./Main";
import MakeAnOrder from "./MakeAnOrder";
import Order from "./Order";
import Registration from "./Registration";

import {
  ADMIN_ROUTE,
  ANNOUNCE_ROUTE,
  EMPLOYEE_LIST_ROUTE,
  EVENT_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  MAKE_AN_ORDER_ROUTE,
  ORDER_ROUTE,
  REGISTRATION_ROUTE,
} from "./paths";

const appRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: ANNOUNCE_ROUTE, Component: Announce },
  { path: REGISTRATION_ROUTE, Component: Registration },
  { path: LOGIN_ROUTE, Component: Login },
  { path: `${EMPLOYEE_LIST_ROUTE}/:id`, Component: EmployeePortfolio },
  { path: EMPLOYEE_LIST_ROUTE, Component: EmployeeList },
  { path: `${EVENT_ROUTE}/:id`, Component: Event },
  { path: MAIN_ROUTE, Component: Main },
  { path: `${ORDER_ROUTE}/:id`, Component: Order },
  { path: `${MAKE_AN_ORDER_ROUTE}`, Component: MakeAnOrder },
];

export default appRoutes;
