/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  ProductsContainer,
  ProductContainer,
  ProductItem,
  ProductName,
  ProductQuantity,
  RemoveProduct
} from './Product.styled.jsx';
import { useGetProducts, useRemoveProducts } from './ProductHooks';

export interface ProductType {
  name: string;
  quantity: number;
  createdAt: number;
  id: number;
}

const Product = () => {
  const products: ProductType[] = useGetProducts();
  const { removeProduct } = useRemoveProducts();

  return (
    <ProductsContainer>
      {products?.map(({ name, quantity, id }: ProductType) => (
        <ProductContainer>
          <ProductItem>
            <ProductName>Product name: {name}</ProductName>
            <ProductQuantity>
              Product quantity: {quantity}
            </ProductQuantity>
          </ProductItem>
          <RemoveProduct
            onClick={() => {
              removeProduct({
                variables: { id }
              });
            }}
          >
            X
          </RemoveProduct>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};

export default Product;
