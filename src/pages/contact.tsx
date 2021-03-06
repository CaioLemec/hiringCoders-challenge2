import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import Head from 'next/head';
import { Header } from "../components/Header";
import { ContactInput } from "../components/PageContacts";

export default function Contact() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <>
      <Head>
        <title>Hiring Challenge | Contact</title>
      </Head>
      <Header />
      <Flex w="100%" h="90vh" align="center" justify="center">
        <Flex w="85%" h="85%" boxShadow="2xl" borderRadius={30} bg="rgba(255, 255, 255, 0.1)" >
          {!isMobileVersion && (
            <Flex w="100%" h="100%" p="6">
              <Image ml="12" src="images/contact.svg" alt="computer" />
            </Flex>
          )}
          <Flex w="100%" h="100%" align="center" justify="center">
            <ContactInput />
          </Flex>
        </Flex>
      </Flex>

    </>
  )
}
