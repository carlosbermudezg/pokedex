import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonView from './pages/PokemonView'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={ <MainLayout></MainLayout> }>
            <Route path='/' element={ <Home/> } />
            <Route element={ <ProtectedRoutes /> }>
              <Route path='/pokedex' element={ <Pokedex /> } />
              <Route path='/pokemon/:pokemonName' element={ <PokemonView />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
