import { DeleteIcon } from "@chakra-ui/icons";
import { Image, Flex, Text, Select, Box, IconButton } from "@chakra-ui/react";
import React from "react";

const CartItem = () => {
  return (
    <div>
      <Flex justifyContent="space-between" mb="2">
        <Image
          src="https://chopnownow.com//hq/pages/generalItem/ProductImages/thumbnails/945.jpg"
          alt="food image"
          boxSize="70px"
        />
        <Box as="p" width="100px">
          JOLLOF SPAGHETTI + CHICKEN
        </Box>
        <Text fontWeight="semibold" as="p">
          $4000
        </Text>
        <Select width="20%">
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
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
