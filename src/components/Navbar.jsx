import '../assets/css/navbar.css'
import { useNavigate, Link } from 'react-router-dom'
import { setPage } from '../store/slices/page.slice'
import { useDispatch, useSelector } from 'react-redux'
import { username } from '../store/slices/userName.slice'
import logo from '../assets/img/pokedex.png'

const Navbar = ()=> {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state=> state.username)

    const logout = ()=>{
        dispatch( username('') )
        dispatch( setPage(1) )
        navigate('/')
    }

    return(
        <nav className='navbar'>
            <Link to={"/pokedex"}><img src={ logo } alt="pokedex" /></Link>
            {
                user && <button onClick={ ()=> logout() }><i className="fa fa-solid fa-right-from-bracket"></i></button>
            }
        </nav>
    )
}
export default Navbar