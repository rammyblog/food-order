import React, { useState } from "react";
import {
  AlertDescription,
  AlertTitle,
  CloseButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const AlertReusable = ({ status, title, description }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <Alert status={status}>
          <AlertIcon />
          <AlertTitle mr={2}>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
          <CloseButton
            onClick={() => setShow(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      ) : null}
    </>
  );
};

export default AlertReusable;
