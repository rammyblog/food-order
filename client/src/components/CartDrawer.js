import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { usePaystackPayment } from "react-paystack";
import { useEffect } from "react";
import { getUserAction } from "../redux/user/userActionCreators";
import { createOrderAction } from "../redux/order/orderActionCreators";
import OrderSuccess from "./OrderSuccess";

const CheckoutButton = ({ initializePayment, disabled, onSuccess }) => {
  return (
    <Button
      variant="outline"
      type="submit"
      form="my-form"
      color="blue.600"
      colorScheme="blue"
      disabled={disabled}
      onClick={() => {
        initializePayment(onSuccess);
      }}
    >
      Checkout
    </Button>
  );
};

const CartDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user) || {};
  const { orderResponse } = useSelector((state) => state.order);
  const userEmail = user.user ? user.user.email : null;
  useEffect(() => {
    if (!user.user) {
      dispatch(getUserAction());
    }
  }, [dispatch, user.user]);

  const config = {
    email: user.user ? userEmail : null,
    amount: cart ? cart.totalAmount * 100 : 0,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  const onSuccess = (props) => {
    dispatch(createOrderAction(cart, props.reference));
    console.log(props);
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            {cart && cart.foods.length > 0 ? (
              <>
                {cart.foods.map((food, idx) => (
                  <CartItem key={idx} food={food} />
                ))}
                <Box textAlign="right" fontWeight="bold">
                  Total: ₦{cart.totalAmount}
                </Box>
                <Box textAlign="right" mt="3">
                  {userEmail ? (
                    <CheckoutButton
                      initializePayment={initializePayment}
                      disabled={false}
                      onSuccess={onSuccess}
                    />
                  ) : (
                    // Login/Register btns
                    <CheckoutButton
                      initializePayment={initializePayment}
                      disabled={true}
                      onSuccess={onSuccess}
                    />
                  )}
                </Box>
              </>
            ) : (
              <Box as="h3" fontWeight="bold" fontSize="xl">
                No food in cart
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {orderResponse ? (
        <OrderSuccess
          reference={orderResponse.reference}
          orderId={orderResponse._id}
        />
      ) : null}
    </>
  );
};

export default CartDrawer;
