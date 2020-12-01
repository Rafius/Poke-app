import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonByIdSelector } from "../../redux/pokemon";
import { ApplicationState } from "../../redux/reducer";
import { PokemonsDetailsContainer } from "./pokemon-details.styled"

const PokemonDetails = () => {
  let { id }: any = useParams();

  const pokemon: any = useSelector((state: ApplicationState) => pokemonByIdSelector(state, id));

  console.log(pokemon, id)
  return (
    <PokemonsDetailsContainer data-testid="pokemon-details-container">
      {pokemon.name}
    </PokemonsDetailsContainer>
  )
}

export default PokemonDetails