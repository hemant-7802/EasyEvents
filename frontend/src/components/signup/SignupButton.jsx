import { Button, Modal, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/react";
import React from "react";
import Signup from "./Signup";
import { useAuthContext } from "../../context/authContext";

function SignupButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { authUser } = useAuthContext()


  return (
    <>
      <Button color="secondary" variant="flat" className={`${authUser ? "hidden" : "flex"}`}>
        Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        size="5xl"
        id="login"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -30,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Signup></Signup>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupButton;
