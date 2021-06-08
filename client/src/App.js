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
  Link,
  IconButton,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CartDrawer from "./components/CartDrawer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import checkAuth from "./helpers/checkAuth";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect } from "react";
import { restoreFromLocalStorageAction } from "./redux/cart/cartActionCreators";
import { authLogout } from "./redux/auth/authActionCreators";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const localStorageCart = JSON.parse(
      localStorage.getItem("foodoCart") || {}
    );
    if (localStorageCart.count > 0) {
      dispatch(restoreFromLocalStorageAction());
    }
  }, [dispatch]);
  const CartIcon = () => {
    return (
      <>
        <Avatar
          onClick={onOpen}
          icon={<Icon as={AiOutlineShoppingCart} />}
          bg="white"
          style={{ cursor: "pointer", zIndex: 1 }}
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
      </>
    );
  };
  return (
    <Router>
      <Flex>
        <Box p="4">
          <Heading size="md">
            <Link href="/">Foodo</Link>
          </Heading>
        </Box>
        <Spacer />
        <Box
          p="4"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {checkAuth() || user ? (
            <>
              <Link href="/profile">
                <Icon as={CgProfile} w={6} h={6} />
              </Link>
              <CartIcon />
              <IconButton
                aria-label="Log out"
                icon={<IoLogOutOutline w={6} h={6} />}
                onClick={() => dispatch(authLogout())}
              />
            </>
          ) : (
            <>
              <Button colorScheme="teal" mr="4">
                <Link href="/register">Sign Up</Link>
              </Button>
              <Button colorScheme="teal">
                <Link href="/login">Log in</Link>
              </Button>
              <CartIcon />
            </>
          )}
        </Box>
      </Flex>
      <Container maxW="container.xl">
        <BaseRouter />
      </Container>
    </Router>
  );
}

export default App;
