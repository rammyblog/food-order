import { DeleteIcon } from "@chakra-ui/icons";
import { Image, Flex, Text, Select, Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/cartActionCreators";

const CartItem = ({ food }) => {
  const { image, name, qty, price, _id } = food;
  const selectArr = Array.from({ length: 10 }, (_, i) => i + 1);
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    dispatch(addToCart(food, e.target.value));
  };
  return (
    <div>
      <Flex justifyContent="space-between" mb="2">
        <Image src={image} alt={name} boxSize="70px" style={{objectFit:'contain'}} />
        <Box as="p" width="100px" fontSize='0.9rem'>
          {name}
        </Box>
        <Text fontWeight="semibold" as="p">
          ₦{price}
        </Text>
        <Select width="20%" value={qty} onChange={(e) => handleSelectChange(e)}>
          {selectArr.map((num, idx) => (
            <option value={num} key={idx}>
              {num}
            </option>
          ))}
        </Select>
        <Box>
          <IconButton
            variant="outline"
            colorScheme="red"
            aria-label="Delete Item from cart"
            icon={<DeleteIcon />}
            onClick={() => dispatch(removeFromCart(_id))}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default CartItem;
