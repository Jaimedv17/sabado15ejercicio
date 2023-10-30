import React from 'react'

export const Header = () => {



  return (
    <header>
        <h1 className='title1'>Seguimiento Pacientes <span className='spanColor'>Veterinaria</span> </h1>
        <div className='title2'>
            <div>
                <h2 className='subTile'>Seguimiento Pacientes</h2>
                <p>Añade paciente y <span className='spanColor'>Administrativo</span> </p>
            </div>
            <div>
                <h2 className='subTile'>Listado de Pacientes</h2>
                <p>Administrar tus <span className='spanColor'>Pacientes y Citas</span> </p>
            </div>
        </div>
    </header>
  )
}
