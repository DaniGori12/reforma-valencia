/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import Link from 'next/link';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Áticos() {

  const landingTeam = await getData("homePage");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, gridText,} = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-72 w-screen pb-10 overflow-hidden relative bg-black '>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold'>
                <p className='text-lg'> Reformas de Áticos en Valencia</p>
                <p className='text-xl mx-5'>{headerBody}</p>
                <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h3>Las opiniones de nuestros clientes de Reformas de áticos en Valencia son tu mejor garantía</h3>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(gridText)}</div>
              <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              <h3 className='px-56 gap-10 max-xl:px-5'>Ahora, solicita tu presupuesto para tu reforma de ático en Valencia y sorpréndete con el precio</h3>
              <hr></hr>
              {body2}
          
          <p className='bg-cyan-800 text-white pt-6  w-1/2 h-24' >Esto debería de ser el carrusel</p>






            </div>

          </div>


        )
      })}



    </main>
  )
}
