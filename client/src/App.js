import "./App.css";
import {
  Flex,
  Button,
  Spacer,
  Box,
  Heading,
  Container,
  useDisclosure,
  Avatar,
  AvatarBadge,
  Icon,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CartDrawer from "./components/CartDrawer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state) => state.cart);

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
          <Avatar
            onClick={onOpen}
            icon={<Icon as={AiOutlineShoppingCart} />}
            bg="white"
            style={{ cursor: "pointer" }}
          >
            <AvatarBadge
              boxSize="1.5rem"
              bg="green.500"
              fontSize="0.8rem"
              color="white"
            >
              {cart.count > 0 ? cart.count : 0}
            </AvatarBadge>
          </Avatar>
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
