/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Banos() {

  const landingTeam = await getData("homePage");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, body3, body4, body5, gridText,
 } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-72 w-screen pb-10 overflow-hidden relative bg-black '>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold'>
                <p className='text-lg'>Reformas de Baños en Valencia </p>
                <p className='text-xl mx-5'>{headerBody}</p>
                <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h3>Descubre tu nueva empresa de Reformas de Baños en Valencia, que sí cumple con lo que promete</h3>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              <h3 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas de baños en Valencia son tu mejor garantía</h3>
              <hr></hr>
              {body2}
              <p className='bg-cyan-800 text-white pt-6  w-1/2 h-24' >Esto debería de ser el carrusel</p>

              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
            </div>

          </div>


        )
      })}



    </main>
  )
}