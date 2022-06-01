import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
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

import { ModalStyled } from "./styles";

interface IProps {
  editModalShow: boolean;
  setEditModalShow: (show: boolean) => void;
  table: ITable;
  setData: (data: any[]) => void;
  valuesDefault: any;
}

const EditRecordModal: FC<IProps> = ({
  editModalShow,
  setEditModalShow,
  table,
  setData,
  valuesDefault,
}) => {
  const eventStore = useContext(Context)?.eventStore;
  const employeeStore = useContext(Context)?.employeeStore;
  const taxationStore = useContext(Context)?.taxationStore;

  const [values, setValues] = useState<any>(valuesDefault);
  const [modalShow, setModalShow] = useState<boolean>(false);

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

  const updateValues = (e: ChangeEvent<any>, inputName: string) => {
    let value = e.target.value;
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
      if (inputName === "description" || inputName === "bio") {
        tempValues[inputName] = value;
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

  useEffect(() => {
    setValues(valuesDefault);
  }, []);

  return (
    <>
      <ModalStyled show={editModalShow} centered>
        <Modal.Body>
          <h2>Редактировать запись</h2>
          <form>
            {table.columnNames.map((inputName: string) => {
              if (
                inputName === "id" ||
                inputName === "img" ||
                inputName === "background" ||
                inputName === "imgExample1" ||
                inputName === "imgExample2" ||
                inputName === "imgExample3"
              ) {
                return null;
              } else if (Object.keys(ID_COLUMNS).includes(inputName)) {
                return (
                  <Select
                    key={inputName}
                    className="form-select"
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                    defaultValue={valuesDefault[inputName]}
                  >
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
                    placeholder={valuesDefault[inputName]}
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                  />
                );
              } else {
                return (
                  <Input
                    key={inputName}
                    placeholder={valuesDefault[inputName]?.toString()}
                    onChange={(e) => {
                      updateValues(e, inputName);
                    }}
                  />
                );
              }
            })}
          </form>
        </Modal.Body>

        <Modal.Footer className="ds-flex flex-columnNames justify-content-evenly">
          <Button
            variant="success"
            onClick={async () => {
              const formData = new FormData();
              for (let key of Object.keys(valuesDefault)) {
                const val = values[key] ? values[key] : valuesDefault[key];
                formData.append(key, val);
              }

              await table.editRecord(formData);

              table
                .fetchData()
                .then((response: any) => {
                  setData(response.rows);
                })
                .catch((err: any) => console.error(err));

              setEditModalShow(false);

              setModalShow(true);

              setTimeout(() => {
                setModalShow(false);
              }, 1000);
            }}
          >
            Oк
          </Button>

          <Button variant="secondary" onClick={() => setEditModalShow(false)}>
            Отменить
          </Button>
        </Modal.Footer>
      </ModalStyled>
      <SuccessModal modalShow={modalShow} />
    </>
  );
};
export default EditRecordModal;
