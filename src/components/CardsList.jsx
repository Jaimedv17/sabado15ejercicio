import React from 'react'

export const CardsList = ({pas, eliminarList}) => {

    console.log(pas)
  return (
    <div className='informacion'>
        <p><span>MASCOTA:</span> {pas.mascota}</p>
        <p><span>PROPIETARIO:</span> {pas.propietario}</p>
        <p><span>EMAIL:</span> {pas.email}</p>
        <p><span>FECHA ALTA:</span> {pas.alta}</p>
        <p><span>SINTOMAS:</span> {pas.sintoma}</p>
        
        <button className='btn2' onClick={()=> eliminarList(pas.id)}>EDITAR</button>

    </div>
  )
}
