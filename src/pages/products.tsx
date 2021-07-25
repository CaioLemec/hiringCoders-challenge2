import { Box, Flex, Text } from "@chakra-ui/react";
import Head from 'next/head';
import React from "react";
import { Header } from "../components/Header";
import ParticlesBackground from "../components/PageHome/Particles";
import { ProductsInput } from "../components/PageProducts";

export default function Contact() {
  const getUserName =  JSON.parse(localStorage.getItem("USER_INFO"));
  const getProductInfos =  JSON.parse(localStorage.getItem("PRODUCT_INFO"));

  return (
    <>
      <Head>
        <title>Hiring Challenge | Products</title>
      </Head>
      <Box
        zIndex="-1"
        position="fixed"
        overflow="hidden"
        w={5000}
        h={5000}
      >
        <ParticlesBackground />
      </Box>
      <Header />
      <Flex w="100%" h="90vh" align="center" justify="center">
        <Flex w="90%" h="90%" boxShadow="2xl" borderRadius={30} bg="rgba(255, 255, 255, 0.1)" >
          <Text position="absolute" top="255" left="0" right="0" textAlign="center" fontSize="32">Hello, {getUserName[0].name} {getUserName[0].lastName}  👋</Text>
          <Flex flexDirection="column" w="100%" h="100%" align="center" justify="center">
            <ProductsInput />
          {getProductInfos && (
            getProductInfos.map(getProductInfo => (
              <Flex w="100%" bg="red">
                <Text>Afsf</Text>
              </Flex>
            ))
          )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}