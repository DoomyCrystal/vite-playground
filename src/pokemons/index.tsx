import { useEffect, useState } from 'react'
import { IPokemon } from '../models/pokemon'
import { Pokemon } from '../ui/Pokemon'

function Pokemons() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    async function fetchPokemons() {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await resp.json()
      setPokemons(data.results)
    }

    fetchPokemons()
  }, [])
  return (
    <div className="App">
      <ul>
        {pokemons.map(item => (
          <li key={item?.name}>
            <Pokemon name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pokemons
