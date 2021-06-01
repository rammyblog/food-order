import { Box, Image, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartActionCreators";

export default function SingleFood({ food }) {
  const dispatch = useDispatch();
  const { image, name, price } = food;
  const addFoodToCart = () => {
    // const foodDetails = { ...food};
    const qty = 1;
    dispatch(addToCart(food, qty));
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {image && <Image src={image} alt={name} />}

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>

        <Box d="flex" mt="2" alignItems="center" justifyContent="space-between">
          <Box>{price}</Box>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => addFoodToCart()}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
