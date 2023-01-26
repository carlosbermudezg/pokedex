import '../assets/css/pokedex.css'
import axios from 'axios'
import { useEffect } from 'react'
import PokeCard from "../components/PokeCard"
import { useSelector, useDispatch } from "react-redux"
import { Pagination } from '@mui/material'
import { setPokemons } from '../store/slices/pokemons.slice'
import { setTypeSelected } from '../store/slices/typeSelected'
import { setPage } from '../store/slices/page.slice'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Pokedex = ()=> {

    const { register, handleSubmit, formState : {errors} } = useForm()
    const navigate = useNavigate()

    //Selecciono estados globales
    const user = useSelector(state=> state.username)
    const config = useSelector(state=> state.config)
    const page = useSelector(state=> state.page)
    const pokemons = useSelector(state=> state.pokemons)
    const pokemonsType = useSelector(state=> state.pokemonsType)
    const typeSelected = useSelector(state=> state.typeSelected)
    const dispatch = useDispatch()

    useEffect(() => {
        typeSelected === 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279' ?
        setType(typeSelected) : false
    }, [])


    const lastIndex = page * config.pokemonsPerPage;
    const firstIndex = lastIndex - config.pokemonsPerPage;
    const pokemonsToShow = pokemons?.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil( pokemons.length / config.pokemonsPerPage )
    const pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

    const paginationChange = (event, value) => {
        dispatch(setPage(value))
    }
    const changeSearch = (event)=>{
        if(event.target.checked){
            document.querySelector('#search__pokemon').classList.add('show')
            document.querySelector('#search__pokemon').classList.remove('hide')
            document.querySelector('#search__type').classList.remove('show')
            document.querySelector('#search__type').classList.add('hide')
        }else{
            document.querySelector('#search__pokemon').classList.add('hide')
            document.querySelector('#search__pokemon').classList.remove('show')
            document.querySelector('#search__type').classList.remove('hide')
            document.querySelector('#search__type').classList.add('show')
        }
    }

    const setType = (url)=>{
        url === "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279" ?

        axios.get(url)
            .then((response)=> {
                dispatch(setTypeSelected(url))
                dispatch( setPokemons(response?.data?.results) )
                dispatch( setPage(1))
            })
            .catch((error)=> console.log(error))

        :
        axios.get(url)
            .then((response)=> {
                dispatch(setTypeSelected(url))
                dispatch( setPokemons(response?.data?.pokemon) )
                dispatch( setPage(1))
            })
            .catch((error)=> console.log(error))
    }

    const searchPokemon = (data)=>{
        navigate(`/pokemon/${data.search}`)
    }

    return(
        <>
            <div className='search'>
            <p>Welcome <b>{ user }</b>, here you can find your favorite pokemon</p>
                <div className='choose'>
                    <label htmlFor="choose">Type</label>
                    <label className="switch">
                        <input id='choose' type="checkbox" onChange={ (event)=> changeSearch(event) } />
                        <span className="slider round"></span>
                    </label>
                    <label htmlFor="choose">Pokemon</label>
                </div>
                <div className='search_box'>
                    <div id='search__pokemon' className='hide'>
                        <form className='search__pokemon' onSubmit={ handleSubmit( searchPokemon ) }>
                            <input {...register("search")} type="text" />
                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                    <div id='search__type' className='show'>
                        <select className='type' {...register("pokemonsType")} defaultValue={ typeSelected } onChange={ (event)=> setType(event.target.value) } >
                            <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">All Pokemons</option>
                            {
                                pokemonsType.map((element, index)=>{
                                    return <option key={index} value={ element.url } >{ element.name }</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <section className='pokedex'>
                {
                    pokemonsToShow.map((element, index)=>{
                        return <PokeCard pokemon={ element.pokemon ? element.pokemon : element } key={ `pokemon-${index}` } />
                    })
                }
            </section>
            <div className='pagination'>
                <Pagination count={ pages.length } page={ page } color="primary" onChange={ paginationChange } />
            </div>
        </>
    )
}
export default Pokedex