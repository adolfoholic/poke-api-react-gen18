import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexById/Pokemon404'
import './styles/pokedexById.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  },[])

  if(hasError){
    return <Pokemon404 />
  }

  return (
    <article className='poke__detail'>
      <header className={`poke__detail-header bg-${pokemon?.types[0].type.name}`}>
        <img className='poke__detail-img'src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2 className={`poke__detail-id letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
        <h2 className={`poke__detail-name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
      </header>
      <section className='poke__characteristics'>
        <ul className='poke__detail-characteristics'>
          <li className='poke__detail-height'>Height:</li>
            <span className='poke__detail-hnumber'>{pokemon?.height}</span>
          <li className='poke__detail-weight'>Weight:</li>
            <span className='poke__detail-wnumber'>{pokemon?.weight}</span>
        </ul>
      </section> 

      <section className='poke__types'>
        <h3 className='poke__detail__title-ty'>Type: </h3>
            <ul className='poke__detail-types'>
                {
                 pokemon?.types.map(type => (
                    <li key={type.slot} className={`poke__detail-type bg-${pokemon?.types[0].type.name}`}>{type.type.name}</li>
                 ))
                }
            </ul>
      </section>
        <section className='poke__abilities'>
        <h3 className='poke__detail__title-ab'>Abilities: </h3>
        <ul className='poke__detail-abilities'>
                {
                 pokemon?.abilities.map(ability => (
                    <li key={ability.url} className='poke__detail-ability'>{ability.ability.name}</li>
                 ))
                }
        </ul>
        </section>

        <section className='poke__stats'>
        <h3 className='poke__detail__title-st'>Stats: </h3>
        <ul className='poke__detail__stats-container'>
               {
                pokemon?.stats.map(stat => (
                  <li key={stat.stat.name} className='poke-detail__stat'>
                    <span className='poke-detail__stat-label'>{stat.stat.name}</span>
                    <span className='poke-detail__stat-number'>: {stat.base_stat}/150</span>
                    <span className="poke-detail__percent">
			                  <div style={{width: `${stat.base_stat}%`}}></div>
		                </span>
                  </li>
                ))
              }
            </ul>
         </section>   
      
      <section className='poke__movements'>
        <h3 className='poke__detail__title-mv'>Moves: </h3>
        <ul className='poke__detail-moves'>
                {
                 pokemon?.moves.map(move => (
                    <li key={move.url} className='poke__detail-move'>{move.move.name} </li>
                 ))
                }
        </ul>
      </section>
    </article>
  )
}

export default PokedexById