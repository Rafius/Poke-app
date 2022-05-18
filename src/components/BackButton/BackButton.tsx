import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './BackButton.styled';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      data-testid="back-button-container"
    >
      Back
    </Button>
  );
};

export default BackButton;
