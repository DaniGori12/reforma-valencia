/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BotonTitle from '../components/BotonTitle';
import Boton from '../components/Boton';
import Carrusel from '../components/Carousel';
import {slides} from '../services/slider'

export const metadata = {
  title: 'Reformas Cocinas Valencia',
  description: 'Empresa de reformas de Cocinas en Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto'
}

export default async function Cocinas() {

  const landingTeam = await getData("homePage");
  const landingTipos = await getData("tipos1");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, body3, gridText, } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-96 w-screen pb-10 overflow-hidden relative'>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen -translate-y-10 '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 mx-1'>
                <h1 className='max-lg:text-base mt-5 flex titulo'> Reformas de Cocinas en Valencia</h1>
                <h3 className='max-sm:text-sm max-sm:text-lg titulo'>{headerBody}</h3>
                <BotonTitle></BotonTitle>
              </div>
            </div>
            <article className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h2>Descubre tu nueva empresa de Reformas de Cocinas en Valencia, que sí cumple con lo que promete</h2>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h2 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas de cocinas en Valencia son tu mejor garantía</h2>
              <hr></hr>
              {body2}
              <Carrusel slides={slides} />

              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
            </article>

          </div>


        )
      })}
      {landingTipos?.map((singlePost: any) => {
        const {bodyCocina, bodyCocina2, bodyCocina3, body3, mediaGrid, mediaCocina, mediaCocina2, mediaCocina3, mediaCocina4, mediaCocina5, mediaCocina6, mediaCocina7
        , mediaCocina8, mediaCocina9, titleCocina  } = singlePost.fields;
        return (
          <article key="" className='flex flex-col text-center mt-20 px-56 gap-10 max-xl:px-5 items-center'>
            <div className='grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1'>
            <img src={'https://' + mediaCocina.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina2.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina3.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img  src={'https://' + mediaCocina4.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina5.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina6.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina7.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina8.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaCocina9.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            </div>
            <p className='px-56 max-xl:px-5'>{bodyCocina}</p>
            <Boton></Boton>
            <div className='flex flex-col items-center gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(bodyCocina2)}</div>
            <Boton></Boton>
            <h3 className='px-56 gap-10 max-xl:px-5'>{titleCocina}</h3>
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
              <a className=' flex flex-col gap-5 centrar text-left px-56 max-xl:px-5'>{documentToReactComponents(bodyCocina3)}</a>

          </article>
        )
      })}



    </main>
  )
}
