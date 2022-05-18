import React, { FC } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import Pokemons from '../containers/Pokemons';
import PokemonDetails from '../containers/PokemonDetails';

const Router: FC = () => (
  <BrowserRouter>
    <MainContainer>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route
          path="/pokemon-details/:id"
          element={<PokemonDetails />}
        />
        <Route element={<Navigate replace to="/" />} />
      </Routes>
    </MainContainer>
  </BrowserRouter>
);

export default Router;
