import '../assets/css/config.css'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { changeConfig } from '../store/slices/config.slice'
import { setPage } from '../store/slices/page.slice'

const Config = ()=> {

    const { register, handleSubmit } = useForm()
    const config = useSelector((state)=> state.config)
    const dispatch = useDispatch()
    
    const setConfig = (data) => {
        dispatch( changeConfig( data ) )
        dispatch( setPage(1) )
    }

    return(
        <section className='config'>
            <form onSubmit={ handleSubmit( setConfig ) } >
                <label htmlFor="pages">Pokemons per page:</label>
                <select id='pages' {...register("pokemonsPerPage")} defaultValue={ config.pokemonsPerPage }>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
                <label htmlFor="darkmode">Dark Mode:</label>
                <label className="switch">
                    <input id='darkmode' type="checkbox" {...register("darkmode")} />
                    <span className="slider__light slider round"></span>
                </label>
                <button type="submit" >Save</button>
            </form>
        </section>
    )
}
export default Config