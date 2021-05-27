import { StarIcon } from "@chakra-ui/icons";
import { Box, Image, Badge, Button } from "@chakra-ui/react";

export default function SingleFood() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="blue">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} category
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {property.title}
        </Box>

        <Box d="flex" mt="2" alignItems="center" justifyContent="space-between">
          <Box>{property.formattedPrice}</Box>
          <Button colorScheme="blue" variant="outline">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
