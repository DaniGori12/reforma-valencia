/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default async function Contacto() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const { contactoGrid, contactoGridMedia } = singlePost.fields;
        return (
          <div key="cont" className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5' >
            <h2 className='mt-10 flex items-center'>Contacto</h2>
            <div className='grid grid-cols-2 gap-5'>
            <a className=' max-xl:px-5'>{documentToReactComponents(contactoGrid)}</a>
            <img src={'https://' + contactoGridMedia.fields.file.url} alt="asdf" width="600" height="480"/>
            </div>
            

              <form className='flex flex-col gap-5 items-center'>

                <label> <input type="text" name="name" placeholder="Nombre" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <input type="text" name="email" placeholder="Email" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <input type="text" name="telefono" placeholder="Teléfono" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label>  <input type="text" name="cp" placeholder="Código postal" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /> </label>
                <label> <textarea placeholder="¿Qué tipo de reforma necesitas?" className='border-2 border-gray pl-2 w-96 max-2xl:w-auto' /></label>
                <button className='botonForm w-96 max-2xl:w-auto'>SOLICITA TU PRESUPUESTO GRATIS</button>
              </form>
              

            

          </div>
        )})}
        
        </main>





  )
}
