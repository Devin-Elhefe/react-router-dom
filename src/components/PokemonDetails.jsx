import { useParams } from "react-router-dom"

export default function PokemonDetails(props) {

    // pokemonId come from the route definition
    // <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon} />}/>
    const { pokemonId } = useParams()
    //pokemonId is a string
    // pokemonId will be whatever is in the URL
    // localhost:5173/pokemon1 -> 1

    const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId))
    

    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>


            </dl>
        </>
    )
}