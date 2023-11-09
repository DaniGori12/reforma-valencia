/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import Boton from '../components/Boton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import BotonTitle from '../components/BotonTitle';

export default async function Mislata() {
  const landingTeam = await getData("homePage");
  const landingMunicipios = await getData("municipios");
  
  
  return (
    <main>
      

    {landingTeam?.map((singlePost: any) => {
      const { headerBody, headerMedia, body, body2, body3, body4, gridText, roomMedia, roomMedia2,
        roomMedia3, roomMedia4, roomMedia5, roomMedia6, roomMedia7, roomMedia8, roomMedia9,
      } = singlePost.fields;
      return (
        <div key="asdf">
          <div className='max-h-72 w-screen pb-10 overflow-hidden relative '>
            <img
              src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen blur-sm '
            />
            <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold max-sm:top-10'>
              <p className='text-lg titulo'> Reformas integrales en Mislata</p>
              <p className='text-xl mx-5 max-sm:text-lg titulo'>{headerBody}</p>
              <BotonTitle></BotonTitle>
            </div>
          </div>
          <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
            <h1>Descubre tu nueva empresa de Reformas en Mislata, que sí cumple con lo que promete</h1>
            <hr></hr>
            <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
            <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
           <Boton></Boton>
            <h3 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas en Mislata son tu mejor garantía</h3>
            <hr></hr>
            {body2}
            <p className='bg-cyan-800 text-white pt-6  w-1/2 h-24' >Esto debería de ser el carrusel</p>

            <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>

            <div className='grid grid-cols-3 gap-2 max-xl:px-5 px-44 max-lg:grid-cols-2 max-sm:grid-cols-1'>
              <img
                src={'https://' + roomMedia.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia2.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia3.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia4.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia5.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia6.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia7.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia8.fields.file.url} alt="asdf" width="300" height="380" className='h-64'
              />
              <img
                src={'https://' + roomMedia9.fields.file.url} alt="asdf" width="300" height="380"
              />
            </div>
            <p className='px-56 gap-10 max-xl:px-5'>{body4}</p>
            <Boton></Boton>
            <h2>Comienza eligiendo el tipo de Reforma que deseas en Mislata</h2>
            <hr ></hr>
          </div>
        </div>
      )
    })}
    {landingMunicipios?.map((singlePost: any) => {
      const { body, body2, mediaCocina3, mediaBano3, cocinaMislata, banoMislata, title, gridMedia, gridBody, bodyMislata } = singlePost.fields;
      return (
        <main key={"alb"}>
          <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
            <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body)}</a>
            <div className='grid grid-cols-2 px-56 gap-10 max-xl:px-5 max-xl:grid-cols-1 gap-5'>
              <div className='flex flex-col border-2 border-gray'>
                <Link href="/cocinas">
                  <img
                    src={'https://' + mediaCocina3.fields.file.url} alt="asdf" width="300" height="280" className='hover:opacity-50'
                  />
                  <p>{cocinaMislata}</p>
                </Link>

              </div>
              <div className='flex flex-col border-2 border-gray'>
                <Link href="/banos">
                  <img
                    src={'https://' + mediaBano3.fields.file.url} alt="asdf" width="300" height="280" className='hover:opacity-50'
                  />
                  <p>{banoMislata}</p>
                </Link>

              </div>
            </div>
            <a className=' px-56 gap-10 flex flex-col  items-center max-xl:px-5 '>{documentToReactComponents(body2)}</a>
            <Boton></Boton>
            <h3 className='px-56  max-xl:px-5'>{title}</h3>
            <hr></hr>
            <div className='grid grid-cols-2 gap-5 px-44 max-xl:px-5 max-2xl:grid-cols-1'>
              <a className='mx-5'>{documentToReactComponents(gridBody)}</a>
              <img src={'https://' + gridMedia.fields.file.url} alt="asdf" width="600" height="480" />
            </div>
            <Boton></Boton>
            <a className='mx-5 flex flex-col centrar text-left gap-5'>{documentToReactComponents(bodyMislata)}</a>
          </div>
        </main>
      )
    })}



  </main>
  )
}
