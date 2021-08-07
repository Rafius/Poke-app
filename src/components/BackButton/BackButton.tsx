import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from './BackButton.styled';

const BackButton: FC = () => {
  const history = useHistory();

  console.log(history.goBack());
  return (
    <Button
      onClick={() => history.goBack()}
      data-testid="back-button-container"
    >
      Back
    </Button>
  );
};

export default BackButton;
