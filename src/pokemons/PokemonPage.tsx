import { useMatch } from '@tanstack/react-location'
import { useEffect, useState } from 'react'

export default function PokemonPage() {
  const { name } = useMatch().params
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function fetchPokemon() {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const resp = await fetch(url)
      const data = await resp.json()
      setPokemon(data.results)
    }

    fetchPokemon()
  }, [name])

  // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  return (
    <div>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
      {/* <a href="/" style={{ display: 'block', color: 'blue', textDecoration: 'underline' }}>
        Zurück
      </a>
      <h1>{pokemon?.name}</h1>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'block', color: 'blue', textDecoration: 'underline' }}
      >
        API-Link
      </a> */}
      {/* <Image
        src={imageUrl}
        alt={pokemon.name}
        width={475}
        height={475}
      /> */}
    </div>
  )
}
