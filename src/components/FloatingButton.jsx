import '../assets/css/floatingbutton.css'

const FloatingButton = ()=> {

    const loadConfig = ()=>{
        document.querySelector('.config').classList.toggle('show')
    }

    return(
        <button onClick={ ()=> loadConfig() } className="floating__button">
            <i className="fa fa-solid fa-gear"></i>
        </button>
    )
}
export default FloatingButton