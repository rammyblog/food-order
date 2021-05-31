import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleFood from "./SingleFood";

const FoodGrid = ({ foods }) => {
  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {foods ? foods.map((food, idx) => <SingleFood food={food} />) : null}
      </SimpleGrid>
    </>
  );
};

export default FoodGrid;
