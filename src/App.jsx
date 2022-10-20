import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/shared/Header'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokedexById/>}/>
        </Route>
      </Routes>
     
    </div>
  )
}

export default App
