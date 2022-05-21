import { ChangeEvent, FC, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { Context } from "../../app";
import SuccessModal from "../SuccessModal";

import { NUMERICAL_COLUMNS } from "../../shared/Constants";
import { isValidNumber, isValidText } from "../../shared/lib/auth";
import { IEmployee } from "../../shared/types/IEmployee";
import { IEvent } from "../../shared/types/IEvent";
import { ITable } from "../../shared/types/ITable";
import { ITaxation } from "../../shared/types/ITaxation";
import { IUser } from "../../shared/types/IUser";
import { Input, Select, TextArea } from "../../shared/ui/InputStyle";
import { ErrorMessage } from "../../shared/ui/textStyle";

import { FormField, ModalStyled } from "./styles";

interface IProps {
  addModalShow: boolean;
  setAddModalShow: (show: boolean) => void;
  table: ITable;
  setData: (data: any[]) => void;
}

const AddRecordModal: FC<IProps> = ({
  addModalShow,
  setAddModalShow,
  table,
  setData,
}) => {
  const eventStore = useContext(Context)?.eventStore;
  const employeeStore = useContext(Context)?.employeeStore;
  const taxationStore = useContext(Context)?.taxationStore;
  const orderStore = useContext(Context)?.orderStore;

  const [values, setValues] = useState<any>({});
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const ID_COLUMNS: any = {
    eventId: {
      data: eventStore?.events,
      getName: (elem: IEvent) => elem.name,
    },
    employeeId: {
      data: employeeStore?.employees,
      getName: (elem: IEmployee) => elem.name + " " + elem.surname,
    },
    taxationId: {
      data: taxationStore?.taxations,
      getName: (elem: ITaxation) => elem.percent + "%",
    },
    userId: {
      data: employeeStore?.employees,
      getName: (elem: IUser) => elem.name + " " + elem.surname,
    },
  };

  const updateStore = (tableName: string, data: any) => {
    if (tableName === "events") {
      eventStore?.setEvents(data);
    } else if (tableName === "employees") {
      employeeStore?.setEmployees(data);
    } else if (tableName === "taxations") {
      taxationStore?.setTaxations(data);
    } else if (tableName === "orders") {
      orderStore?.setOrders(data);
    }
  };

  const updateValues = (
    e: ChangeEvent<any>,
    inputName: string,
    isFile: boolean = false
  ) => {
    let value;

    if (isFile) {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }

    const tempValues = values;

    if (NUMERICAL_COLUMNS.includes(inputName)) {
      if (isValidNumber(e)) {
        tempValues[inputName] = value;
        setValues(tempValues);
        e.target.value = tempValues[inputName];
      } else {
        e.target.value = tempValues[inputName] || "";
      }
    } else {
      if (isFile) {
        tempValues[inputName] = value;
        setValues(tempValues);
      } else if (inputName === "description" || inputName === "bio") {
        tempValues[inputName] = value.slice(0, 255);
        setValues(tempValues);
        e.target.value = tempValues[inputName];
      } else if (isValidText(e)) {
        tempValues[inputName] = value;
        setValues(tempValues);
        e.target.value = tempValues[inputName];
      } else {
        e.target.value = tempValues[inputName] || "";
      }
    }
  };

  return (
    <>
      <ModalStyled show={addModalShow} centered>
        <Modal.Body>
          <h2>Добавить запись</h2>
          <form>
            {table.columnNames.map((inputName: string) => {
              if (inputName === "id") {
                return null;
              } else if (
                inputName === "img" ||
                inputName === "background" ||
                inputName === "imgExample1" ||
                inputName === "imgExample2" ||
                inputName === "imgExample3"
              ) {
                return (
                  <FormField key={inputName}>
                    <p>{inputName}</p>
                    <input
                      type="file"
                      onChange={(e) => updateValues(e, inputName, true)}
                    />
                  </FormField>
                );
              } else if (Object.keys(ID_COLUMNS).includes(inputName)) {
                return (
                  <Select
                    key={inputName}
                    className="form-select"
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                  >
                    <option>{`Выберите ${inputName}`}</option>
                    {ID_COLUMNS[inputName].data.map((elem: any) => (
                      <option value={elem.id} key={elem.id}>
                        {ID_COLUMNS[inputName].getName(elem)}
                      </option>
                    ))}
                  </Select>
                );
              } else if (inputName === "description" || inputName === "bio") {
                return (
                  <TextArea
                    key={inputName}
                    placeholder={inputName}
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                  />
                );
              } else {
                return (
                  <Input
                    key={inputName}
                    placeholder={inputName}
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                  />
                );
              }
            })}
          </form>
          <ErrorMessage hidden={!errorMessage}>{errorMessage}</ErrorMessage>
        </Modal.Body>

        <Modal.Footer className="ds-flex flex-columnNames justify-content-evenly">
          <Button
            variant="success"
            onClick={async () => {
              const isFormFilled =
                Object.keys(values).length == table.columnNames.length - 1;

              if (isFormFilled) {
                setErrorMessage("");

                const formData = new FormData();
                for (let key of Object.keys(values)) {
                  formData.append(key, values[key]);
                }

                await table.createRecord(formData);
                table
                  .fetchData()
                  .then((response: any) => {
                    setData(response.rows);
                    updateStore(table.tableName, response);
                  })
                  .catch((err: any) => console.error(err));

                setAddModalShow(false);
                setModalShow(true);

                setTimeout(() => {
                  setModalShow(false);
                }, 1000);
              } else {
                setErrorMessage("Все поля должны быть заполнены!");
              }
            }}
          >
            Oк
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setAddModalShow(false);
            }}
          >
            Отменить
          </Button>
        </Modal.Footer>
      </ModalStyled>
      <SuccessModal modalShow={modalShow} />
    </>
  );
};
export default AddRecordModal;
