export interface PokemonTypes {
  readonly type: string;
  readonly payload?: any;
  readonly count?: number;
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
  back_default: string;
}
