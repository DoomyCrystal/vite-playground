import { ReactLocation, Route } from "@tanstack/react-location";
import Pokemons from "./pokemons";
import PokemonPage from "./pokemons/PokemonPage";

export const routes: Route[] = [
  {
    path: '/',
    element: <Pokemons />,
    children: [
      {
        path: 'pokemon/:pokemonName',
        element: <PokemonPage />
      }
    ]
  },
]

export const location = new ReactLocation()