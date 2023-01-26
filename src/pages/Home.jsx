import '../assets/css/home.css'
import { useSelector, useDispatch } from "react-redux"
import { username } from "../store/slices/userName.slice"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useEffect } from 'react'
import { setPokemonsType } from '../store/slices/pokemonsType.slice'
import axios from 'axios'
import trainer from '../assets/img/trainer.png'
import go from '../assets/img/go.png'

const Home = ()=> {

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then((response)=> dispatch( setPokemonsType(response.data.results) ))
        .catch((error)=> console.log(error))
    }, [])
    

    const { register, handleSubmit, formState: { errors } } = useForm();
    const setUserName = (data) => {
        dispatch( username( data.name ) )
        navigate('/pokedex')
    }

    const name = useSelector((state)=> state.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <section className='home'>
            <h1>¡Hello Trainer!</h1>
            <img src={ trainer } alt="" />
            <small>Give me your name to start</small>
            <form onSubmit={ handleSubmit( setUserName ) } >
                <input id="name" type="text" {...register("name", { required: true })} placeholder={ errors.name ? 'Name (Required Field*)' : 'Name' } />
                <button type="submit" ><img src={ go } alt="" /></button>
            </form>
        </section>
    )
}
export default Home