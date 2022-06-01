import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import {
  getEmployees,
  getEvents,
  getOrders,
  getTaxations,
  getUsers,
} from "./lib/ApiFuncHandler";
import DataTable from "../../features/Table";
import { ITable } from "../../shared/types/ITable";

import { AdminPanel, PageContainer } from "../../shared/ui/ContainersStyle";
import { ButtonCreation } from "./styles";
import SuccessModal from "../../entities/SuccessModal";

const Admin: FC = observer(() => {
  const [buttonActivity, setButtonActivity] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const [addModalShow, setAddModalShow] = useState<boolean>(false);
  const [successModalShow, setSuccessModalShow] = useState<boolean>(false);

  const [table, setTable] = useState<ITable>(getUsers());

  useEffect(() => {
    setTable(getEvents());
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <AdminPanel>
        <button
          className={buttonActivity[0] ? "active" : ""}
          onClick={() => {
            setButtonActivity([!buttonActivity[0], false, false, false, false]);
            setTable(getEvents());
          }}
        >
          Мероприятия
        </button>
        <button
          className={buttonActivity[1] ? "active" : ""}
          onClick={() => {
            setButtonActivity([false, !buttonActivity[1], false, false, false]);
            setTable(getEmployees());
          }}
        >
          Работники
        </button>
        <button
          className={buttonActivity[2] ? "active" : ""}
          onClick={() => {
            setButtonActivity([false, false, !buttonActivity[2], false, false]);
            setTable(getTaxations());
          }}
        >
          Налоги
        </button>
        <button
          className={buttonActivity[3] ? "active" : ""}
          onClick={() => {
            setButtonActivity([false, false, false, !buttonActivity[3], false]);
            setTable(getOrders());
          }}
        >
          Заказы
        </button>
        <button
          className={buttonActivity[4] ? "active" : ""}
          onClick={() => {
            setButtonActivity([false, false, false, false, !buttonActivity[4]]);
            setTable(getUsers());
          }}
        >
          Пользователи
        </button>
      </AdminPanel>

      {!!table.createRecord && (
        <ButtonCreation onClick={() => setAddModalShow(true)}>
          Создать запись
        </ButtonCreation>
      )}

      {table.createReport ? (
        <ButtonCreation
          onClick={() => {
            table.createReport();
            setSuccessModalShow(true);

            setTimeout(() => {
              setSuccessModalShow(false);
            }, 1000);
          }}
        >
          Загрузить отчёт
        </ButtonCreation>
      ) : null}

      <DataTable
        table={table}
        addModalShow={addModalShow}
        setAddModalShow={setAddModalShow}
      />

      <SuccessModal modalShow={successModalShow} />
    </PageContainer>
  );
});

export default Admin;
