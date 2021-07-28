import React from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';
import { LoaderContainer } from './Loader.styled';
import loader from './loader.gif';

const LoaderComponent = () => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return null;

  return (
    <LoaderContainer data-testid="loader-container">
      <img src={loader} loading="lazy" alt="loading..." />
    </LoaderContainer>
  );
};

export default LoaderComponent;
