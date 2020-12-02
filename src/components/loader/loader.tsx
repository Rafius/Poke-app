import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../redux/loader/loader-selectors';
import { LoaderContainer } from './loader.styled';

const LoaderComponent = () => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return null;

  return (
    <LoaderContainer data-testid="loader-container">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </LoaderContainer>
  );
};

export default LoaderComponent;
