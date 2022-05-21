import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";

import { Context } from "../app";
import appRoutes from "./routes";
import Main from "./Main";

import { fetchEvents } from "../shared/api/eventsAPI";
import { fetchEmployees } from "../shared/api/employeesAPI";
import { fetchOrders } from "../shared/api/ordersAPI";
import { fetchTaxations } from "../shared/api/taxationsAPI";
import { fetchAllUsers } from "../shared/api/usersAPI";

const AppRouter: FC = observer(() => {
  const eventStore = useContext(Context)?.eventStore;
  const employeeStore = useContext(Context)?.employeeStore;
  const orderStore = useContext(Context)?.orderStore;
  const taxationStore = useContext(Context)?.taxationStore;
  const userStore = useContext(Context)?.userStore;

  useEffect(() => {
    fetchEvents().then((events) => eventStore?.setEvents(events));
    fetchEmployees().then((employees) =>
      employeeStore?.setEmployees(employees)
    );
    fetchOrders().then((orders) => orderStore?.setOrders(orders));
    fetchTaxations().then((taxes) => taxationStore?.setTaxations(taxes));
    fetchAllUsers().then((users) => userStore?.setUsers(users));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      {appRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Main />} />
    </Routes>
  );
});

export default AppRouter;
