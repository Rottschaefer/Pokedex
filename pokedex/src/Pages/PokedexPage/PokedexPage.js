import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { StyledCard } from "../../Components/PokemonCard/StyledPokemonCard"
import { StyledMain, StyledP, StyledContainer } from "./StyledPokedex"
import { useCompletePokemons, useRequestData } from "../../Hooks/UseRequestData"
import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"



export const PokedexPage = () => {

    const pokemons = useContext(GlobalContext)

    // const pokemons = useRequestData([], "?limit=12")[0]

    return (
        <StyledMain>

            <StyledP>Todos Pokémons</StyledP>
            <StyledContainer>
            {pokemons ? (
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} name={pokemon.name} id={pokemon.id} sprite={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types}/>
                ))
            ) : (
                <p>Carregando...</p> 
            )}
            </StyledContainer>
            {/* <PokemonCard /> */}
        </StyledMain> 

    )
}