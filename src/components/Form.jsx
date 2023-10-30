import React, { useState } from 'react'

export const Form = ({setPasiente, pasiente}) => {
    const[mascota, setMascota] = useState("");
    const[propietario, setPropietario] = useState("");
    const[email, setEmail] = useState("");
    const[alta, setAlta] = useState("");
    const[sintoma, setSintoma] = useState("");

    const funsionEnviar = (e) => {
        e.preventDefault();
        const data = {id:new Date().getMilliseconds(), mascota, propietario, email, alta, sintoma}
        setPasiente([...pasiente, data])

        setMascota("")
        setPropietario("")
        setEmail("")
        setAlta("")
        setSintoma("")
    }



  return (
    <section>
        <form onSubmit={funsionEnviar}>
            <div className='labelInput'>
                <label htmlFor="">NOMBRE MASCOTA </label>
                <input type="text" value={mascota} onChange={(e) => setMascota(e.target.value)}/>
            </div>
            <div className='labelInput'>
                <label htmlFor="">NOMBRE PROPIETARIO </label>
                <input type="text" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
            </div>
            <div className='labelInput'>
                <label htmlFor="">EMAIL </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='labelInput'>
                <label htmlFor="">ALTA </label>
                <input type="date" value={alta} onChange={(e) => setAlta(e.target.value)}/>
            </div>
            <div className='labelInput'>
                <label htmlFor="">SINTOMAS </label>
                <textarea name="" id="" cols="30" rows="10" value={sintoma} onChange={(e) => setSintoma(e.target.value)}></textarea>
            </div>
            <div>
                <button className='btn' type='submit' disabled={!mascota || !propietario || !email || !alta || !sintoma }>
                    ENVIAR
                </button>
            </div>
        </form>
    </section>
  )
}
