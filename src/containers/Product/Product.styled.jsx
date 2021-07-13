import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  row-gap: 1em;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 80%);
  grid-column-gap: 3.33%;
  grid-row-gap: 60px;
  background-color: lightgray;
  border-radius: 3px;
  padding: 30px;
`;

export const ProductItem = styled.div``;

export const ProductName = styled.div``;

export const ProductQuantity = styled.div``;

export const RemoveProduct = styled.button`
  width: 40px;
  cursor: pointer;
`;
