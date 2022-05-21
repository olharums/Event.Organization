import { MouseEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { MAIN_ROUTE } from "../paths";
import { Context } from "../../app";
import { FormField } from "../../entities/AddRecordModal/styles";
import SuccessModal from "../../entities/SuccessModal";
import { createOrder } from "../../shared/api/ordersAPI";
import { ButtonOrderDefault } from "../../shared/ui/buttonOrderStyle";
import { PageContainer } from "../../shared/ui/ContainersStyle";
import { Input, Select } from "../../shared/ui/InputStyle";

import { Form, Message, RadioDiv } from "./styles";

const MakeAnOrder = observer(() => {
  const eventStore = useContext(Context)?.eventStore;
  const userStore = useContext(Context)?.userStore;
  const employeeStore = useContext(Context)?.employeeStore;
  const taxationStore = useContext(Context)?.taxationStore;

  const [eventId, setEventId] = useState<number | string>(
    eventStore?.currentEvent?.id || -1
  );
  const [publicAccess, setPublicAccess] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const [error, setError] = useState<string>("");

  const [modalShow, setModalShow] = useState<boolean>(false);

  const calculatePrice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (eventId && date && address) {
      const tax = taxationStore?.taxations.find((t) => t.eventId == eventId);
      const event = eventStore?.events.find((e) => e.id == eventId);

      if (tax?.percent && event?.price) {
        setPrice(Math.round(event.price + event.price * (tax.percent / 200)));
        setError("");
      }
    } else {
      setError("Все поля должны быть заполнены");
    }
  };

  const createAnOrder = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userId = userStore?.currentUser?.id || "-1";

    const employees =
      employeeStore?.getEmployeesByEventId(Number(eventId)) || [];

    let empId: any = [];
    for (let e of employees) {
      empId.push(e.id);
    }
    empId = empId.join(", ");

    const tax = taxationStore?.taxations.find((t) => t.eventId == eventId);

    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    formData.append("publicAccess", publicAccess.toString());
    formData.append("date", date);
    formData.append("address", address);
    formData.append("userId", userId?.toString());
    formData.append("employeeId", empId);
    formData.append("taxationId", tax ? tax.id.toString() : "-1");
    formData.append("price", price.toString());

    await createOrder(formData);

    setModalShow(true);

    setTimeout(() => {
      setModalShow(false);
      navigate(MAIN_ROUTE);
    }, 1300);
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!eventStore || !taxationStore) {
    return null;
  }

  return (
    <PageContainer>
      <h1 style={{ marginTop: "1rem" }}>Заказать мероприятие</h1>
      <Form>
        <Select
          className="form-select"
          onChange={(e) => {
            setPrice(0);
            setError("");
            setEventId(e.target.value);
          }}
          value={eventId}
        >
          <option>Выберите мероприятие</option>
          {eventStore.events.map((elem) => (
            <option value={elem.id} key={elem.id} selected={elem.id == eventId}>
              {elem.name}
            </option>
          ))}
        </Select>

        <FormField>
          <p>{"Тип мероприятия"}</p>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <RadioDiv>
              <input
                type="radio"
                id={"radio1"}
                name="publicAccess"
                value={"true"}
                onChange={() => {
                  setPrice(0);
                  setError("");
                  setPublicAccess(true);
                }}
              />
              <label htmlFor="radio1">Открытое</label>
            </RadioDiv>

            <RadioDiv>
              <input
                type="radio"
                id={"radio2"}
                name="publicAccess"
                value={"false"}
                defaultChecked={true}
                onChange={() => {
                  setPrice(0);
                  setError("");
                  setPublicAccess(false);
                }}
              />
              <label htmlFor="radio2">{"Закрытое (приватное)"}</label>
            </RadioDiv>
          </div>
        </FormField>

        <FormField>
          <p>{"Выберите дату"}</p>
          <Input
            type="date"
            onChange={(e) => {
              setPrice(0);
              const value = e.target.value;
              if (Date.parse(value) > Date.now()) {
                setDate(value);
                setError("");
              } else {
                setDate("");
                setError("Некорректная дата");
              }
            }}
            value={date}
          />
        </FormField>

        <Input
          type={"text"}
          placeholder={"Адрес"}
          value={address}
          onChange={(e) => {
            setPrice(0);
            setError("");
            setAddress(e.target.value);
          }}
        />

        {error ? <Message className="error">{error}</Message> : null}

        {price ? <Message>Цена: {price} грн.</Message> : null}
        {!price ? (
          <ButtonOrderDefault onClick={calculatePrice}>
            Узнать цену
          </ButtonOrderDefault>
        ) : (
          <ButtonOrderDefault onClick={(e) => createAnOrder(e)}>
            Оформить заказ
          </ButtonOrderDefault>
        )}
      </Form>
      <SuccessModal modalShow={modalShow} />
    </PageContainer>
  );
});
export default MakeAnOrder;
