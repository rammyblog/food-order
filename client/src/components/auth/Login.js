import {
  Box,
  Image,
  Center,
  Flex,
  Text,
  FormErrorMessage,
  FormControl,
  Button,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  Stack,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import LoginImage from "../../assets/svgs/login.svg";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/auth/authActionCreators";
import AlertReusable from "../common/Alert";
import checkAuth from "../../helpers/checkAuth";
import { getUserAction } from "../../redux/user/userActionCreators";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (checkAuth()) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getUserAction());
      history.push("/");
    }
  }, [auth.token, history, dispatch]);

  return (
    <>
      <Flex>
        <Center flex={["0", "0.6", "0.6"]}>
          <Image boxSize="500px" src={LoginImage} alt="Login" />
        </Center>

        <Box flex={["1", "0.4", "0.4"]} alignSelf="center">
          <Heading as="h3" size="lg" marginBottom="10px">
            Welcome Back!
          </Heading>
          <Text marginBottom="16px">
            Fill in your login credentials to pick up where you left off
          </Text>

          {auth.error ? (
            <AlertReusable status="error" title={auth.errResponse} />
          ) : null}

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              dispatch(authLogin(values));
              actions.setSubmitting(auth.loading);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Enter your email address"),
              password: Yup.string().min(6).required("Enter your password"),
            })}
          >
            {(props) => (
              <Form>
                <Stack spacing={4}>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<EmailIcon color="gray.700" />}
                            marginTop="5px"
                          />
                          <Input
                            {...field}
                            id="email"
                            placeholder="Email"
                            size="lg"
                            width={{
                              base: "auto", // 0-48em
                              md: "auto", // 48em-80em,
                              xl: "400px", // 80em+
                            }}
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<LockIcon color="gray.700" />}
                            marginTop="5px"
                          />
                          <Input
                            type="password"
                            {...field}
                            id="password"
                            placeholder="Password"
                            size="lg"
                            width={{
                              base: "auto", // 0-48em
                              md: "auto", // 48em-80em,
                              xl: "400px", // 80em+
                            }}
                          />
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Stack>

                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
                <Text marginTop="20px">
                  Don't have an account?{" "}
                  <Link color="blue.500" href="/register">
                    Sign Up
                  </Link>
                </Text>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
