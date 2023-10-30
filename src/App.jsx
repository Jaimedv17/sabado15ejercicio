import React, { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { ContainerList } from './components/ContainerList'

export const App = () => {

  const [pasiente, setPasiente] = useState([])

  const eliminarList = (elementID) => {
    const newArray = pasiente.filter((pasiente)=>pasiente.id != elementID)
    setPasiente(newArray)

  }
  // console.log (pasiente)



  return (
    <div className='app'>
      <div className='header'>
        <Header/>
      </div>
      <div className='fronInformFlex'>
        <div className='form'>
          <Form setPasiente={setPasiente} pasiente ={pasiente}/>
        </div>
        <div className='inform'>
          <ContainerList pasiente ={pasiente} eliminarList = {eliminarList}/>
        </div>
      </div>
    </div>
  )
}

