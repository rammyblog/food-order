import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleFood from "./SingleFood";

const FoodGrid = ({ foods }) => {
  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {foods ? <SingleFood /> : null}
      </SimpleGrid>
    </>
  );
};

export default FoodGrid;
