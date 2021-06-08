import { useEffect } from "react";
import {
  useToast,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrderAction } from "../redux/order/orderActionCreators";

const SingleOrder = ({ match }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { errResponse, error, singleOrder } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getSingleOrderAction(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (error || errResponse) {
      toast({
        title: "Error!",
        description: errResponse || "Something went wrong",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, errResponse, toast]);

  return (
    <>
      <Text as="h1" fontWeight="bold" mb="10px">
        Order Details
      </Text>
      {singleOrder ? (
        <>
          <Text>Order ID #{singleOrder._id}</Text>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Qty</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {singleOrder.cart.foods.map((food, idx) => {
                return (
                  <Tr key={idx}>
                    <Td>{food.name}</Td>
                    <Td>{food.qty}</Td>
                    <Td>₦{food.price}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th>Total Amount: ₦{singleOrder.cart.totalAmount}</Th>
              </Tr>
            </Tfoot>
          </Table>
          <Button variant="outline" colorScheme='blue'>Re Order</Button>
        </>
      ) : null}
    </>
  );
};

export default SingleOrder;
