import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";

const CouponInput = () => {
  return (
    <Box align="right" textAlign="right">
      <Text>Got a coupon ? Use it below:</Text>
      <Input placeholder="Enter Coupon code" size="sm" width="auto" mr="1" />
      <Button colorScheme="blue" size="sm" variant="outline">
        Apply
      </Button>
    </Box>
  );
};

export default CouponInput;
