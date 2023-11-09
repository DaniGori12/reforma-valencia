/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BotonTitle from '../components/BotonTitle';
import Boton from '../components/Boton';
import { Carrusel } from '../components/Carousel';

export default async function Locales() {

  const landingTeam = await getData("homePage");
  const landingTipos = await getData("tipos1");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, body3, gridText, } = singlePost.fields;
        return (
          <div key="asdf">
             <div className='max-h-72 w-screen pb-10 overflow-hidden relative '>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen blur-sm'
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold max-sm:top-10'>
                <p className='text-lg titulo'> Reformas de Locales en Valencia</p>
                <p className='text-xl mx-5 max-sm:text-lg titulo'>{headerBody}</p>
               <BotonTitle></BotonTitle>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h1>Descubre tu nueva empresa de Reformas de Locales comerciales en Valencia, que sí cumple con lo que promete</h1>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h2 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas de Locales comerciales en Valencia son tu mejor garantía</h2>
              <hr></hr>
              {body2}
              <Carrusel></Carrusel>
              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
            </div>
          </div>
        )
      })}
      {landingTipos?.map((singlePost: any) => {
        const { bodyBanos, bodyLocales, bodyLocales2, titleLocales, body3, mediaGrid} = singlePost.fields;
        return (
          <div key="" className='flex flex-col text-center mt-20 px-56 gap-10 max-xl:px-5 items-center'>
            <p className='px-56 max-xl:px-5'>{bodyBanos}</p>
            <Boton></Boton>
            <div className='flex flex-col items-center gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(bodyLocales)}</div>
            <Boton></Boton>
            <h3 className='px-56 gap-10 max-xl:px-5'>{titleLocales}</h3>
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
              <a className=' flex flex-col gap-5 items-center text-left px-56 max-xl:px-5'>{documentToReactComponents(bodyLocales2)}</a>

          </div>
        )
      })}



    </main>
  )
}
