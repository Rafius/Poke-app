import { useQuery, useMutation } from '@apollo/client';

import {
  GetProductsQuery,
  RemoveProductQuery
} from './ProductQueries';

export const useGetProducts = () => {
  const { data } = useQuery(GetProductsQuery, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only'
  });

  return data?.products || [];
};

export const useRemoveProducts = () => {
  const [removeProduct, { data: removedData }] = useMutation(
    RemoveProductQuery,
    {
      refetchQueries: () => [
        {
          query: GetProductsQuery
        }
      ]
    }
  );

  return { removeProduct, removedData };
};
