import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css' 

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState("All Pokemons")

  useEffect(() => {
    if(typeSelected !=="All Pokemons"){
      //si se selecciono un tipo
        axios.get(typeSelected)
          .then(res => {
            const result = res.data.pokemon.map(e => e.pokemon)
            setPokemons(result)
          })
          .catch(err => console.log(err))
    }else{
      //si quiero todos los pokemons
      const URL ='https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
    
  },[typeSelected])

  const userName = useSelector(state => state.userName)

  //Lógica de paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage


  return (
    <div>
      <header className='pokedex__header'>
      <h1>Pokedex</h1>
      </header>
      <aside className='pokedex__aside'>
      <marquee className='pokedex__marquesina'>🧢Welcome <span>{userName}</span>, here you can find your favorite pokemon.🧢</marquee>
        <InputSearch/>
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke,finalPoke).map(pokemon => (
              <CardPoke 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>

  )
}

export default Pokedex