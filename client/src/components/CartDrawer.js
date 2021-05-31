import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <CartItem />
            <CartItem />
            <CartItem />
            <Box textAlign="right" fontWeight='bold'>Total: $5000</Box>
            <Box textAlign="right" mt='3'>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
