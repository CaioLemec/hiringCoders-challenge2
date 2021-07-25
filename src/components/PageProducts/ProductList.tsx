import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductInfoContext } from "../../contexts/ProductInfoContext";

export function ProductList() {
  const { productInfo } = useContext(ProductInfoContext);
  return (
    <>
      {productInfo?.map((product) => (
        <Box alignContent="center" justifyContent="center" borderRadius={10} p={2} bg="purple.main">
        <Text w="100%">{`Product: ${product.name}`}</Text>
        <Text w="100%">{`Price: U$D ${product.price}`}</Text>
        </Box>
      ))}
    </>
  );
}
