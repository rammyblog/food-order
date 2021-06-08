import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAction } from "../redux/order/orderActionCreators";
import { Table, Thead, Tbody, Tr, Th, Td, Text, Link } from "@chakra-ui/react";
import formatDate from "../helpers/formatDate";

const Profile = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!orders) {
      dispatch(getOrdersAction());
    }
  }, [dispatch, orders]);

  return (
    <>
      <Text textAlign="right" fontWeight="semibold" mb="20px">
        Hello ✌{user && user.lastName}
      </Text>

      <Text fontWeight="semibold">Orders</Text>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Created At</Th>
            <Th>Total Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders ? (
            orders.map((order, idx) => {
              return (
                <Tr key={idx}>
                  <Td>
                    <Link href={`/order/${order._id}`}>{order._id}</Link>
                  </Td>
                  <Td>{formatDate(order.createdAt)}</Td>
                  <Td>₦{order.cart.totalAmount}</Td>
                </Tr>
              );
            })
          ) : (
            <p>No order yet</p>
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default Profile;
