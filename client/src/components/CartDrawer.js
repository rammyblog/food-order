import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Link,
  useToast,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { usePaystackPayment } from "react-paystack";
import React, { useEffect } from "react";
import { getUserAction } from "../redux/user/userActionCreators";
import { createOrderAction } from "../redux/order/orderActionCreators";
import OrderSuccess from "./OrderSuccess";
import checkAuth from "../helpers/checkAuth";
import CouponInput from "./CouponInput";

const CheckoutButton = ({ initializePayment, disabled, onSuccess }) => {
  return (
    <Button
      type="submit"
      form="my-form"
      color="white  "
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
  const toast = useToast();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user) || {};
  const { orderResponse } = useSelector((state) => state.order);
  const { message, error } = useSelector((state) => state.cart);
  const userEmail = user.user ? user.user.email : null;

  useEffect(() => {
    if (!user.user && checkAuth()) {
      dispatch(getUserAction());
    }
  }, [dispatch, user.user]);

  useEffect(() => {
    if (message) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }

    if (error) {
      toast({
        title: "Failed",
        description: error,
        status: "warning",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [toast, message, error]);

  const config = {
    email: user.user ? userEmail : null,
    amount: cart ? cart.totalAmount * 100 : 0,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  const onSuccess = (props) => {
    dispatch(createOrderAction(cart, props.reference));
    toast({
      title: "Success",
      description:
        "Order is processing, Kindly wait for a popup that will confirm your order. Do not refresh this page",
      status: "success",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
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
                <CouponInput />
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
                    <>
                      <CheckoutButton
                        initializePayment={initializePayment}
                        disabled={true}
                        onSuccess={onSuccess}
                      />
                      <Box mt="10px">
                        <Button colorScheme="teal" mr="4">
                          <Link href="/register">Sign Up</Link>
                        </Button>
                        <Button colorScheme="teal">
                          <Link href="/login">Log in</Link>
                        </Button>
                      </Box>
                    </>
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
