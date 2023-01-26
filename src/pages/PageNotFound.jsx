import { Link } from "react-router-dom"
const PageNotFound = ()=> {
    return(
        <div>
            <Link to={ "/pokedex" }>Volver</Link>
            pagina no econtrada
        </div>
    )
}
export default PageNotFound