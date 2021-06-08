import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const OrderSuccess = ({ reference, orderId }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    dispatch({ type: "ORDER_RESPONSE_CLEAR" });
    setShow(false);
  };
  return (
    <>
      {show ? (
        <Modal isOpen={show} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order success</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Yay! Your order with id {orderId} and payment reference{" "}
              {reference} is successful.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Close
              </Button>
              <Button variant="ghost">Check Orders</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default OrderSuccess;
