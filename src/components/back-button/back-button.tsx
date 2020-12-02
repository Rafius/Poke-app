import React from "react"
import { useHistory } from 'react-router-dom'

import { Button } from "./back-button.styled"

const BackButton = () => {
  const history = useHistory()
  return (
    <Button onClick={() => history.goBack()} data-testid="back-button">
      Back
    </Button>
  )
}

export default BackButton