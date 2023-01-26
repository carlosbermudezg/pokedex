import '../assets/css/pokemonview.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const PokemonView = ()=> {

    const { pokemonName } = useParams()
    const [ pokemon, setPokemon ] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response)=> setPokemon( response?.data ))
        .catch(()=> navigate("*"))
    }, [])

    return(
        <section className='container'>
            <img src="/src/assets/img/pokelogo.png" alt="" />
            <div className='container__left'>
                <div className='pokemon'>
                    <img src="" alt="" />
                </div>
                <div className='pokemon__data'>
                    <div className='pokemon__types'>

                    </div>
                    <div className='pokemon_abilities'>

                    </div>
                </div>
                <div className='pokemon__stats'>
                    
                </div>
            </div>
            <div className='container__right'>

            </div>
            <Link to={ '/pokedex' } >Go Back</Link><br />
            {
                pokemon?.name
            }
        </section>
    )
}
export default PokemonView