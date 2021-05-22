import { Grid, Box, Image, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LoginImage from "../assets/images/login.svg";

const Login = () => {
  return (
    <>
      {/* <Grid templateColumns="repeat(2, 1fr)" gap={3} justifyContent="center">
        <Box boxSize="md"></Box>
        <Box>
          <p></p>
        </Box>
      </Grid> */}

      <Flex>
        <Center flex='0.5'>
          <Image src={LoginImage} alt="Login" />
        </Center>

        <Box flex="0.5">
          <Text>Welcome to login</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
