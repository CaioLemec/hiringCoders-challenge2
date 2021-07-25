import { createContext, useState } from "react";

interface ProductInfoItem {
  name: string;
  price: string;
}

interface ProductInfoContextData {
  productInfo: ProductInfoItem[];
  addProductInfoItem: (item: ProductInfoItem) => void;
}

export const ProductInfoContext = createContext({} as ProductInfoContextData);

export function ProductInfoContextProvider({ children }) {
  const [productInfo, setProductInfo] = useState([]);

  function addProductInfoItem(item: ProductInfoItem) {
    const newProductsInfo = [...productInfo, item];

    setProductInfo(newProductsInfo);
  }

  return (
    <ProductInfoContext.Provider value={{ productInfo, addProductInfoItem }}>
      {children}
    </ProductInfoContext.Provider>
  );
}
