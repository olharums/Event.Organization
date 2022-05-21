import { FC } from "react";
import { Container, Modal } from "react-bootstrap";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const SuccessModal: FC<{ modalShow: boolean }> = ({ modalShow }) => {
  return (
    <Modal
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container className="text-center">
          <IoCheckmarkDoneCircle size={"5rem"} style={{ fill: "green" }} />

          <h2>Операция успешно выполнена!</h2>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default SuccessModal;
