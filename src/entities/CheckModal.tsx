import { FC, ReactChild } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../pages/paths";

interface IProps {
  modalShow: boolean;
  setModalShow: ([show, id]: [boolean, string | number]) => void;
  children: ReactChild;
  clickHandler?: () => void;
}

const CheckModal: FC<IProps> = ({
  modalShow,
  setModalShow,
  children,
  clickHandler,
}) => {
  const navigate = useNavigate();

  return (
    <Modal
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer className="ds-flex flex-row justify-content-evenly">
        <Button
          variant="danger"
          onClick={() => {
            clickHandler && clickHandler();
            setModalShow([false, -1]);
            navigate(ADMIN_ROUTE);
          }}
        >
          Oк
        </Button>

        <Button variant="secondary" onClick={() => setModalShow([false, -1])}>
          Отменить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CheckModal;
