import React from 'react';
import { gql, useQuery } from '@apollo/client';

const Product = () => {
  const test = gql`
    query {
      products {
        name
        quantity
        createdAt
      }
    }
  `;

  const { loading, data } = useQuery(test);

  if (loading) return 'loading ...';

  return data?.products?.map(({ name, quantity, createdAt }: any) => (
    <div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>{createdAt}</div>
    </div>
  ));
};

export default Product;
