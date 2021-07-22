import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const CouponInput = () => {
  return (
    <Box align="right" textAlign="right">
      <Text>Got a coupon ? Use it below:</Text>

      <Input placeholder="Enter Coupon code" width="auto" />
    </Box>
  );
};

export default CouponInput;
