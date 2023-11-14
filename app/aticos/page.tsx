/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import Link from 'next/link';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BotonTitle from '../components/BotonTitle';
import Boton from '../components/Boton';
import Carrusel from '../components/Carousel';
import {slides} from '../services/slider'

export const metadata = {
  title: 'Reformas Áticos Valencia',
  description: 'Empresa de reformas de Áticos en Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto'
}

export default async function Áticos() {

  const landingTeam = await getData("homePage");
  const landingTipos = await getData("tipos1");
  
  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const { headerBody, headerMedia, body, body2, gridText, } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-96 w-screen pb-10 overflow-hidden relative'>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen -translate-y-10 '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 mx-1'>
                <h1 className='max-lg:text-base mt-5 flex titulo'> Reformas de Áticos en Valencia</h1>
                <h3 className='max-sm:text-sm max-sm:text-lg titulo'>{headerBody}</h3>
                <BotonTitle></BotonTitle>
              </div>
            </div>
            <article className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h2>Las opiniones de nuestros clientes de Reformas de Áticos en Valencia son tu mejor garantía</h2>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden '>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h3 className='px-56 gap-10 max-xl:px-5'>Ahora, solicita tu presupuesto para tu reforma de ático en Valencia y sorpréndete con el precio</h3>
              <hr></hr>
              {body2}
              <Carrusel slides={slides} />
            </article>
          </div>
        )
      })}
      {landingTipos?.map((singlePost: any) => {
        const { bodyBanos, body2, title, body3, mediaGrid, body4 } = singlePost.fields;
        return (
          <article key="" className='flex flex-col text-center mt-20 px-56 gap-10 max-xl:px-5 items-center'>
            <p className='px-56 max-xl:px-5'>{bodyBanos}</p>
            <Boton></Boton>
            <div className='flex flex-col items-center gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body2)}</div>
            <Boton></Boton>
            <h3 className='px-56 gap-10 max-xl:px-5'>{title}</h3>
            <hr></hr>
            <div className='flex gap-5 px-56 max-xl:px-5 max-lg:flex-col justify-center text-center'>
              <a className=' max-xl:px-5 text-left'>{documentToReactComponents(body3)}</a>
              <Link href="/contacto">
                <img
                  src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="400" height="380" className='w-screen'
                />
              </Link>

            </div>

            <Boton></Boton>
              <a className=' flex flex-col gap-5 items-center text-left px-56 max-xl:px-5'>{documentToReactComponents(body4)}</a>

          </article>
        )
      })}



    </main>
  )
}
