import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Image, Button, useToast } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/cartActionCreators";

export default function SingleFood({ food }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const toast = useToast();

  const { image, name, price, _id } = food;
  const addFoodToCart = () => {
    const qty = 1;
    toast({
      title: "Item added",
      description: `We've added ${name} to the cart`,
      status: "success",
      position: "top-right",
      duration: 800,
      isClosable: true,
    });

    dispatch(addToCart(food, qty));
  };

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {image && <Image src={image} alt={name} />}

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {name}
          </Box>

          <Box
            d="flex"
            mt="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>₦{price}</Box>
            {cart && cart.foods.length > 0 ? (
              cart.foods.find((obj) => obj._id === _id) ? (
                <Button
                  colorScheme="red"
                  variant="outline"
                  leftIcon={<DeleteIcon />}
                  onClick={() => dispatch(removeFromCart(_id))}
                >
                  Remove from cart
                </Button>
              ) : (
                <Button
                  colorScheme="blue"
                  variant="outline"
                  leftIcon={<AddIcon />}
                  onClick={() => addFoodToCart()}
                >
                  Add to cart
                </Button>
              )
            ) : (
              <Button
                colorScheme="blue"
                variant="outline"
                leftIcon={<AddIcon />}
                onClick={() => addFoodToCart()}
              >
                Add to cart
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
