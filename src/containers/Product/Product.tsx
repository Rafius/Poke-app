/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import BackButton from '../../components/back-button';
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
  const removeProduct = useRemoveProducts();

  const handleRemoveItem = (id: number) => {
    removeProduct({
      variables: { id }
    });
  };

  return (
    <ProductsContainer>
      <BackButton />

      {products?.map(({ name, quantity, id }: ProductType) => (
        <ProductContainer key={id}>
          <ProductItem>
            <ProductName>Product name: {name}</ProductName>
            <ProductQuantity>
              Product quantity: {quantity}
            </ProductQuantity>
          </ProductItem>
          <RemoveProduct onClick={() => handleRemoveItem(id)}>
            X
          </RemoveProduct>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};

export default Product;
