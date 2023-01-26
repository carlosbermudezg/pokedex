import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Config from "../components/Config"
import FloatingButton from "../components/FloatingButton"

const MainLayout = ()=>{
    return(
        <>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
            <Config></Config>
            <FloatingButton></FloatingButton>
        </>
    )
}
export default MainLayout