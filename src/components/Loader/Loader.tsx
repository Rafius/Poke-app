import React from 'react';
import { LoaderContainer, LoaderImage } from './Loader.styled';
import loader from './loader.gif';

type LoaderType = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: LoaderType) => {
  if (!isLoading) return null;

  return (
    <LoaderContainer data-testid="loader-container">
      <LoaderImage src={loader} loading="lazy" alt="loading..." />
    </LoaderContainer>
  );
};

export default Loader;
