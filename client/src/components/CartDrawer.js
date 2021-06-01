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
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            {cart && cart.length > 0 ? (
              <>
                {cart.map((food, idx) => (
                  <CartItem key={idx} food={food} />
                ))}
                <Box textAlign="right" fontWeight="bold">
                  Total: ${cart.totalAmount}
                </Box>
                <Box textAlign="right" mt="3">
                  <Button
                    variant="outline"
                    type="submit"
                    form="my-form"
                    color="blue.600"
                    colorScheme="blue"
                  >
                    Checkout
                  </Button>
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
    </>
  );
};

export default CartDrawer;
