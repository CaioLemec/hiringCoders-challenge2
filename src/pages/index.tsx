import { Flex, Box, Image, VStack, Text, useBreakpointValue, Container } from "@chakra-ui/react";
import React from "react";
import Head from 'next/head';
import { Header } from "../components/Header";
import { SignUpButton } from "../components/SignUpButton";

export default function Home() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <>
      <Head>
        <title>Hiring Challenge | Home</title>
      </Head>
      <Flex
        direction="column"
        h="100vh"
      >
        <Header />
        <Flex
          w="100%"
          h="100%"
          maxWidth={1480}
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
          <Box d="flex" w="100%" h="100%" alignItems="center" justifyContent="center">
            <VStack gridGap="6">
              <Text fontSize="5xl" textAlign="center">Amazing <Text as="span" color="pink.main">e</Text>-commerce</Text>
              <Text fontSize="2xl" textAlign="center">Your dreams are our fuel.</Text>
              <SignUpButton size="80%" />
            </VStack>
          </Box>
          {!isMobileVersion && (
            <Box d="flex" w="100%" h="100%" >
              <Image src="images/omniTech.svg" alt="computer" />
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  )
}