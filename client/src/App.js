import "./App.css";
import {
  Flex,
  Button,
  Spacer,
  Box,
  Heading,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CartDrawer from "./components/CartDrawer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <Flex>
        <Box p="4">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box p="4">
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
          <Button onClick={onOpen}>Cart</Button>
          <CartDrawer isOpen={isOpen} onClose={onClose} />
        </Box>
      </Flex>
      <Container maxW="container.xl">
        <BaseRouter />
      </Container>
    </Router>
  );
}

export default App;
