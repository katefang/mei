import React, { createContext, useState } from "react";
export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
  filtered: [],
  setFiltered: () => {},
});
const ProductsContextProvider = ({ children }) => {
  const [filtered, setFiltered] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <ProductsContext.Provider
      value={{ products, setProducts, filtered, setFiltered }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
