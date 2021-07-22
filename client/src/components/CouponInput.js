import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCoupon } from "../redux/cart/cartActionCreators";

const CouponInput = () => {
  const [coupon, setCoupon] = useState();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleCouponApply = () => {
    if (!coupon) {
      setError(true);
    } else {
      dispatch(updateCoupon(coupon));
    }
  };
  return (
    <Box align="right" textAlign="right">
      <Text>Got a coupon ? Use it below:</Text>
      <Input
        value={coupon}
        name="coupon"
        onChange={(e) => {
          setCoupon(e.target.value);
          setError(null);
        }}
        placeholder="Enter Coupon code"
        size="sm"
        width="auto"
        mr="1"
        isInvalid={error}
        errorBorderColor="red.300"
      />
      <Button
        onClick={() => handleCouponApply()}
        colorScheme="blue"
        size="sm"
        variant="outline"
      >
        Apply
      </Button>
    </Box>
  );
};

export default CouponInput;
