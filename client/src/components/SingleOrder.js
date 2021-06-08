import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrderAction } from "../redux/order/orderActionCreators";

const SingleOrder = ({ match }) => {
  console.log(match.params.id);
  const dispatch = useDispatch();
  const toast = useToast();

  const { errResponse, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getSingleOrderAction(match.params.id));
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (error || errResponse) {
      toast({
        title: "Error!",
        description: errResponse || "Something went wrong",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, errResponse]);

  return <div></div>;
};

export default SingleOrder;
