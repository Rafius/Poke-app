export interface PokemonTypes {
  readonly type: string;
  readonly payload?: any;
  readonly id?: number;
}

export interface PokemonsTypes {
  data: PokemonsReqPayload[];
  currentPokemon: PokemonReqPayload;
  filter: string;
  evolutions: PokemonsEvolutions[];
  isLoading: boolean;
}

export interface PokemonsReqPayload {
  name: string;
  url: string;
}

export interface PokemonsEvolutions {
  species_name: string;
  url: string;
  min_level: number;
}

export interface PokemonReqPayload {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  species: object;
  sprites: PokemonSprites;
  types: PokemonTypes[];
  weight: number;
}

export interface PokemonTypes {
  type: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
}
