import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import Head from 'next/head';
import React from "react";
import { Header } from "../components/Header";
import { ProductsInput } from "../components/PageProducts";
import { ProductList } from "../components/PageProducts/ProductList";
import { ProductInfoContextProvider } from "../contexts/ProductInfoContext";

export default function Contact() {

  return (
    <>
      <Head>
        <title>Hiring Challenge | Products</title>
      </Head>
      <Header />
      <Flex w="100%" h="90vh" align="center" justify="center">
        <Flex w="90%" h="90%" boxShadow="2xl" borderRadius={30} bg="rgba(255, 255, 255, 0.1)" >
          <Flex flexDirection="column" w="100%" h="100%" align="center" justify="center">
            <ProductInfoContextProvider>
              <ProductsInput />
              <Grid mt={8} templateColumns="repeat(3, 1fr)" gap={6}>
                <ProductList />
              </Grid>
            </ProductInfoContextProvider>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}