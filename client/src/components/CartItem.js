import { DeleteIcon } from "@chakra-ui/icons";
import { Image, Flex, Text, Select, Box, IconButton } from "@chakra-ui/react";
import React from "react";

const CartItem = ({ food, totalAmount }) => {
  const { image, name, qty, price } = food;
  const selectArr = Array.from({ length: 10 }, (_, i) => i + 1);
  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Flex justifyContent="space-between" mb="2">
        <Image src={image} alt={name} boxSize="70px" />
        <Box as="p" width="100px">
          {name}
        </Box>
        <Text fontWeight="semibold" as="p">
          ₦{price}
        </Text>
        <Select width="20%" value={qty} onChange={handleSelectChange}>
          {selectArr.map((num, idx) => (
            <option value={num} key={idx}>
              {num}
            </option>
          ))}
        </Select>
        <Box>
          <IconButton
            variant="outline"
            colorScheme="blue"
            aria-label="Delete Item from cart"
            icon={<DeleteIcon />}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default CartItem;
