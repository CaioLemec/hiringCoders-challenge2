import { useDisclosure, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export function SignUpButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const router = useRouter()

  async function handleUserRegister() {
    const userArrayInfo = new Array({
      name: userName, 
      lastName: userLastName, 
      email: userEmail, 
      password: userPassword
    });
    localStorage.setItem('USER_INFO', JSON.stringify(userArrayInfo));   
    router.push('/products')
  }
  
  return (
    <>
      <Button
        onClick={onOpen}
        size="lg"
        w={`${props.size}`}
        fontSize="16"
        mr="5"
        ml={["4", "2"]}
        bg="pink.main"
        color="yellow.main"
        _hover={{ opacity: "0.8" }}
        _active={{
          transform: "scale(0.90)",
        }}
        _focus={{
          border: "none",
        }}
      >
        Register products now!
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent alignSelf="center" bg="transparent">
          <ModalHeader bg="purple.main" borderTopRadius="20" fontSize="25" color="pink.main">Sign Up</ModalHeader>
          <ModalCloseButton color="pink.main" fontSize="15" _focus={{ border: "2px", borderColor: "pink.main" }} />
          <ModalBody pb={6} bg="purple.main">
            <FormControl>
              <FormLabel textColor="yellow.main">First name</FormLabel>
              <Input
                onChange={event => setUserName(event.target.value)} 
                value={userName}
                ref={initialRef}
                placeholder="First name"
                borderColor="pink.main"
                _focus={{
                  border: "2px",
                  borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel textColor="yellow.main">Last name</FormLabel>
              <Input
                onChange={event => setUserLastName(event.target.value)} 
                value={userLastName}
                placeholder="Last name"
                borderColor="pink.main"
                _focus={{
                  border: "2px",
                  borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel textColor="yellow.main">E-mail adress</FormLabel>
              <Input
                onChange={event => setUserEmail(event.target.value)} 
                value={userEmail}
                placeholder="E-mail adress"
                borderColor="pink.main"
                _focus={{
                  border: "2px",
                  borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel textColor="yellow.main">Password</FormLabel>
              <Input
                onChange={event => setUserPassword(event.target.value)} 
                value={userPassword}
                placeholder="Password"
                borderColor="pink.main"
                _focus={{
                  border: "2px",
                  borderColor: "pink.main",
                }}
                _hover={{ transform: "scale(0.95)", }}
              />
            </FormControl>

          </ModalBody>

          <ModalFooter bg="purple.main" borderBottomRadius="20">
            <Button
              onClick={handleUserRegister}
              mr="3"
              bg="pink.main"
              color="yellow.main"
              _hover={{ opacity: "0.8" }}
              _active={{
                transform: "scale(0.90)",
              }}
              _focus={{
                border: "none",
              }}
            >
              Log In
            </Button>
            <Button
              onClick={onClose}
              bg="yellow.main"
              color="pink.main"
              _hover={{ opacity: "0.8" }}
              _active={{
                transform: "scale(0.90)",
              }}
              _focus={{
                border: "none",
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}