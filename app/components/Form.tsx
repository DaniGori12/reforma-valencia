"use client"
import React from 'react'

export default function Form() {
    const handleSubmit = () => {
        alert("Solicitud enviada correctamente") 
    }

    return (
        <div>
            <form className='flex flex-col gap-5 items-center enlace' id="presupuesto" onSubmit={handleSubmit} >

                <label> <input type="text" name="name" placeholder="Nombre" required className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <input type="email" name="email" placeholder="Email" required className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <input type="tel" name="telefono" placeholder="Teléfono"  required className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label>  <input type="number" name="cp" placeholder="Código postal" required  className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <textarea placeholder="¿Qué tipo de reforma necesitas?" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /></label>
                <button className='botonForm' type="submit" value="submit">SOLICITA TU PRESUPUESTO GRATIS</button>
             
            </form>
            
        </div>
    )
}
