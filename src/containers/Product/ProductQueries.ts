import { gql } from '@apollo/client';

export const CreateProductQuery = gql`
  mutation {
    createProduct(variables: { name: name, quantity: quantity }) {
      id
      name
    }
  }
`;

export const GetProductsQuery = gql`
  query {
    products {
      name
      quantity
      createdAt
      id
    }
  }
`;

export const RemoveProductQuery = gql`
  mutation ($id: Int!) {
    deleteProduct(id: $id)
  }
`;
