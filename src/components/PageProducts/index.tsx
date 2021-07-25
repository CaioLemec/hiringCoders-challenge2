import { Flex, FormControl, FormLabel, Input, VStack, Button } from "@chakra-ui/react"
import React, { useState } from "react";

export function ProductsInput() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productInfo, setProductInfo] = useState([]);

    function addingProductContact(userArrayInfo) {
        const newProductsInfo = [...productInfo, userArrayInfo];
        setProductInfo(newProductsInfo)
        localStorage.setItem('PRODUCT_INFO', JSON.stringify(newProductsInfo));   
    }

    async function handleUserContact() {
        let userArrayInfo = new Array({
            name: productName, 
            price: productPrice 
          });   
          addingProductContact(userArrayInfo);
    }
    
    return (
        <Flex>
            <VStack>
                <FormControl id="first-name">
                    <FormLabel>Product Name</FormLabel>
                    <Input
                        onChange={event => setProductName(event.target.value)} 
                        value={productName}
                        placeholder="name"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Product Price</FormLabel>
                    <Input
                        onChange={event => setProductPrice(event.target.value)} 
                        value={productPrice}
                        type="number"
                        placeholder="usd"
                        borderColor="pink.main"
                        _focus={{
                            border: "2px",
                            borderColor: "pink.main",
                        }}
                        _hover={{ transform: "scale(0.95)", }}
                        mb="4"
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