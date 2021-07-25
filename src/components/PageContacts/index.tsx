import { Flex, FormControl, FormLabel, Input, VStack, Textarea, Button } from "@chakra-ui/react"
import { useRouter } from "next/router";
import React, { useState } from "react";

export function ContactInput() {
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const router = useRouter()
  
    async function handleUserContact() {
      const contactArrayInfo = new Array({
        name: contactName, 
        email: contactEmail, 
        message: contactMessage
      });
      localStorage.setItem('CONTACT_INFO', JSON.stringify(contactArrayInfo));   
      router.push('/')
      alert('Your email was sent sucefully. Wait our answer at your e-mail')
    }
    
    return (
        <Flex>
            <VStack>
                <FormControl id="first-name">
                    <FormLabel>First name</FormLabel>
                    <Input
                        onChange={event => setContactName(event.target.value)} 
                        value={contactName}
                        placeholder="Name"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        onChange={event => setContactEmail(event.target.value)} 
                        value={contactEmail}
                        type="email"
                        placeholder="E-mail"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="content">
                    <FormLabel>Menssage</FormLabel>
                    <Textarea
                        onChange={event => setContactMessage(event.target.value)} 
                        value={contactMessage}
                        placeholder="We are waiting for your contact."
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <Button
                    onClick={handleUserContact}
                    size="lg"
                    w="100%"
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
                    Contact us
                </Button>
            </VStack>
        </Flex>
    );
}