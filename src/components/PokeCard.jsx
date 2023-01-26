import '../assets/css/pokecard.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import nopokemon from '../assets/img/nopokemon.png'

const PokeCard = ({pokemon})=> {

    const [data, setData] = useState({})

    useEffect(() => {
      axios.get(pokemon.url)
        .then((response)=> {
            setData( response?.data )
        })
        .catch((error)=> console.log(error))
    }, [pokemon])

    return(
        <Link className='poke__link' to={ `/pokemon/${data?.name}` }>
            <div className={`poke__card ${data?.types?.[0].type.name}`}>
                <h1>{ data?.name }</h1>
                <img src={ data?.sprites?.other['official-artwork']?.front_default === null ? nopokemon : data?.sprites?.other['official-artwork']?.front_default} alt={ `pokemon-${data?.id}` } />
                <div className='poke__info'>
                    <div className='poke__stats'>
                        {
                            data?.stats?.map((stat, index) => {
                                return <small key={index}> <b>{stat.stat.name} :</b> { stat.base_stat } </small>
                            })
                        }
                    </div>
                    <div className='poke__types'>
                        {
                            data?.types?.map((type, index)=>{
                                return <small key={index}> { type.type.name } </small>
                            })
                        }
                    </div>
                </div>
            </div>
        </Link>
        
    )
}
export default PokeCard