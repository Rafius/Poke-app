import { useQuery, useMutation } from '@apollo/client';

import {
  GetProductsQuery,
  RemoveProductQuery
} from './ProductQueries';

export const useGetProducts = () => {
  const { data } = useQuery(GetProductsQuery);

  return data?.products || [];
};

export const useRemoveProducts = () => {
  const [removeProduct] = useMutation(RemoveProductQuery, {
    refetchQueries: () => [
      {
        query: GetProductsQuery
      }
    ]
  });

  return removeProduct;
};
