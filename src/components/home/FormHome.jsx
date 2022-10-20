import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault() 
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))//el trim es para los espacios generados en caso ingresen espacios 
    navigate('/pokedex')
  }


  return (
    <div>
      <form onSubmit={submit} className="pokedex__form">
        <input className="pokedex__input" type="text" 
        placeholder="Enter your name here"/>
        <button className="pokedex__btn">Catch them all</button>
      </form>
    </div>
  )
}

export default FormHome