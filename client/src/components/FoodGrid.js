import { SimpleGrid } from "@chakra-ui/react";
import SingleFood from "./SingleFood";

const FoodGrid = ({ foods }) => {
  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {foods
          ? foods.map((food, idx) => <SingleFood key={idx} food={food} />)
          : null}
      </SimpleGrid>
    </>
  );
};

export default FoodGrid;
  