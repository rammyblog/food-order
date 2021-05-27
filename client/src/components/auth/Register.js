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
  Avatar,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import RegisterSvg from "../../assets/svgs/register.svg";
import { Formik, Form, Field } from "formik";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/auth/authActionCreators";
import AlertReusable from "../common/Alert";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) {
      history.push("/profile");
    }
  }, [auth.token, history, dispatch]);

  return (
    <>
      <Flex>
        <Center flex={["0", "0.6", "0.6"]}>
          <Image boxSize="500px" src={RegisterSvg} alt="Welcome to Foodo" />
        </Center>

        <Box flex={["1", "0.4", "0.4"]} alignSelf="center">
          <Heading as="h3" size="lg" marginBottom="10px">
            New to Foodo?
          </Heading>
          <Text marginBottom="16px">
            Fill in your details to experience food delivery in a different way
          </Text>

          {auth.error ? (
            <AlertReusable status="error" title={auth.errResponse} />
          ) : null}

          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
              confirmPassword: "",
              username: "",
            }}
            onSubmit={(values, actions) => {
              dispatch(authLogin(values));
              actions.setSubmitting(auth.loading);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Enter your email address"),
              firstName: Yup.string()
                .min(3)
                .max(50)
                .required("Enter your First Name"),
              lastName: Yup.string()
                .min(3)
                .max(50)
                .required("Enter your Last Name"),

              username: Yup.string()
                .min(3)
                .max(50)
                .required("Enter your username"),
              password: Yup.string().min(6).required("Enter your password"),
              confirmPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
            })}
          >
            {(props) => (
              <Form>
                <Stack spacing={4}>
                  <Flex
                    justifyContent="space-between"
                    flexDirection={{
                      base: "column",
                      md: "row",
                      lg: "row",
                    }}
                  >
                    <Field name="firstName">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.firstName && form.touched.firstName
                          }
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <Avatar
                                  width="15px"
                                  height="15px"
                                  color="blue"
                                />
                              }
                              marginTop="5px"
                            />
                            <Input
                              {...field}
                              id="firstName"
                              placeholder="First Name"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                // xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.firstName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="lastName">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.lastName && form.touched.lastName
                          }
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <Avatar
                                  width="15px"
                                  height="15px"
                                  color="blue"
                                />
                              }
                              marginTop="5px"
                            />
                            <Input
                              {...field}
                              id="lastName"
                              placeholder="Last Name"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                // xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.lastName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Flex
                    flexDirection={{
                      base: "column",
                      md: "row",
                      lg: "row",
                    }}
                  >
                    <Field name="username">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.username && form.touched.username
                          }
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={
                                <Avatar
                                  width="15px"
                                  height="15px"
                                  colorScheme="blue"
                                />
                              }
                              marginTop="5px"
                            />
                            <Input
                              {...field}
                              id="username"
                              placeholder="Username"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                //   xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<EmailIcon color="blue.600" />}
                              marginTop="5px"
                            />
                            <Input
                              {...field}
                              id="email"
                              placeholder="Email"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                //   xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Flex
                    flexDirection={{
                      base: "column",
                      md: "row",
                      lg: "row",
                    }}
                  >
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<LockIcon color="blue.600" />}
                              marginTop="5px"
                            />
                            <Input
                              type="password"
                              {...field}
                              id="password"
                              placeholder=" Password"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                //   xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="confirmPassword">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.confirmPassword &&
                            form.touched.confirmPassword
                          }
                        >
                          <InputGroup>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<LockIcon color="blue.600" />}
                              marginTop="5px"
                            />
                            <Input
                              type="password"
                              {...field}
                              id="confirmPassword"
                              placeholder="Confirm Password"
                              size="lg"
                              width={{
                                base: "100%", // 0-48em
                                md: "100%", // 48em-80em,
                                //   xl: "400px", // 80em+
                              }}
                            />
                          </InputGroup>
                          <FormErrorMessage>
                            {form.errors.confirmPassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                </Stack>

                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Register
                </Button>
                <Text marginTop="20px">
                  Already have an account?{" "}
                  <Link color="blue.500" href="/login">
                    Login
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

export default Register;
