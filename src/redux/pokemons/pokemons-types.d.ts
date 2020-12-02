export interface PokemonTypes {
  readonly type: string;
  readonly payload?: any;
  readonly id?: number;
}

export interface PokemonsTypes {
  data: PokemonsReqPayload[];
  currentPokemon: PokemonReqPayload;
  filter: string;
}

export interface PokemonsReqPayload {
  name: string;
  url: string;
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
  types: [];
  weight: number;
}

export interface PokemonSprites {
  front_default: string;
  back_default: string;
}
