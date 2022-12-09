import { Link } from "@tanstack/react-location"
import { FC } from "react"
import { IPokemon } from "../models/pokemon"

export const Pokemon: FC<IPokemon> = ({ name }) => {
  return (
    <Link to={`/pokemon/${name}`}>
      {name}
    </Link>
  )
}