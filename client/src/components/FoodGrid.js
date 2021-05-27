import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleFood from "./SingleFood";

const FoodGrid = () => {
  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
        <SingleFood />
      </SimpleGrid>
    </>
  );
};

export default FoodGrid;
