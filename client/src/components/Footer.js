import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Icon, Center, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Center>
      <Box bg="teal.700" w="100%" p={4} color="white" textAlign="center">
        Built with ❤ by{" "}
        <Link
          href="https://onasanyatunde.vercel.app/"
          isExternal
          fontWeight="bold"
          color="#ababff"
          mr="10px"
        >
          Babatunde Onasanya <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://github.com/rammyblog/food-order" isExternal>
          <Icon as={AiFillGithub} h={6} v={6} />
        </Link>
      </Box>
    </Center>
  );
};

export default Footer;
