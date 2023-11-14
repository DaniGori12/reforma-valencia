/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BotonTitle from '../components/BotonTitle';
import Boton from '../components/Boton';
import Carrusel from '../components/Carousel';
import {slides} from '../services/slider'

export const metadata = {
  title: 'Reformas Baños Valencia',
  description: 'Empresa de reformas de Baños en Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto'
}

export default async function Banos() {

  const landingTeam = await getData("homePage");
  const landingTipos = await getData("tipos1");

  
  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, body3, gridText,
 } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-96 w-screen pb-10 overflow-hidden relative'>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen  -translate-y-10 '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 mx-1'>
                <h1 className='max-lg:text-base mt-5 flex titulo'> Reformas de Baños en Valencia</h1>
                <h3 className='max-sm:text-sm max-sm:text-lg titulo'>{headerBody}</h3>
                <BotonTitle></BotonTitle>
              </div>
            </div>
            <article className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h2>Descubre tu nueva empresa de Reformas de Baños en Valencia, que sí cumple con lo que promete</h2>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h3 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas de baños en Valencia son tu mejor garantía</h3>
              <hr></hr>
              {body2}
              <Carrusel slides={slides} />

              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
            </article>

          </div>


        )
      })}
      {landingTipos?.map((singlePost: any) => {
        const {bodyCocina, bodyBanos2, bodyBanos3, body3, mediaGrid, mediaBanos, mediaBanos2, mediaBanos3, mediaBanos4, mediaBanos5, mediaBanos6, mediaBanos7
        , mediaBanos8, mediaBanos9, titleBanos  } = singlePost.fields;
        return (
          <article key="" className='flex flex-col text-center mt-20 px-56 gap-10 max-xl:px-5 items-center'>
            <div className='grid grid-cols-3 gap-5  max-lg:grid-cols-2 max-sm:grid-cols-1'>
            <img src={'https://' + mediaBanos.fields.file.url} alt="asdf" width="300" height="380" className='h-56 '/>
            <img src={'https://' + mediaBanos2.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos3.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img  src={'https://' + mediaBanos4.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos5.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos6.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos7.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos8.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            <img src={'https://' + mediaBanos9.fields.file.url} alt="asdf" width="300" height="380" className='h-56'/>
            </div>
            <p className='px-56 max-xl:px-5'>{bodyCocina}</p>
            <Boton></Boton>
            <div className='flex flex-col items-center gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(bodyBanos2)}</div>
            <Boton></Boton>
            <h3 className='px-56 gap-10 max-xl:px-5'>{titleBanos}</h3>
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
              <a className=' flex flex-col gap-5 centrar text-left  px-56 max-xl:px-5'>{documentToReactComponents(bodyBanos3)}</a>

          </article>
        )
      })}



    </main>
  )
}