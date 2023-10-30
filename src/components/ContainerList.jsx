import React from 'react'
import { CardsList } from './CardsList'

export const ContainerList = ({pasiente, eliminarList}) => {
console.log (pasiente)


  return (
    <section>
        {
            pasiente.map((pas)=> (
               <CardsList pas = {pas} key = {pas.id} eliminarList = {eliminarList}/> 
            ))
        }
        
    </section>
)
}
