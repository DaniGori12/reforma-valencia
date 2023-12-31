/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BotonTitle from '../components/BotonTitle';
import Boton from '../components/Boton';
import Carrusel from '../components/Carousel';
import {slides} from '../services/slider'

export const metadata = {
  title: 'Reformas integrales El Centro',
  description: 'Empresa de reformas en el Centro de Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto'
}

export default async function Centro() {

  const landingTeam = await getData("homePage");
  const landingBarrios = await getData("barrios");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const {headerBody, headerMedia, body, body2, body3, body4, body5, gridText,
          carrouselMedia, buildingMedia, buildingMedia2, buildingMedia3, buildingMedia4, buildingMedia5, buildingMedia6,
          roomMedia, roomMedia2, roomMedia3, roomMedia4, roomMedia5, roomMedia6, roomMedia7, roomMedia8, roomMedia9,
          buildingMedia7, buildingMedia8, buildingText, buildingText2, buildingText3, buildingText4, buildingText5,
          buildingText6, buildingText7, buildingText8 } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-96 w-screen pb-10 overflow-hidden relative'>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen -translate-y-10 '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 mx-1'>
                <h1 className='max-lg:text-base mt-5 flex titulo'> Reformas integrales en el Centro</h1>
                <h3 className='max-sm:text-sm max-sm:text-lg titulo'>{headerBody}</h3>
                <BotonTitle></BotonTitle>
              </div>
            </div>
            <article className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h2>Descubre tu nueva empresa de Reformas en el Centro, que sí cumple con lo que promete</h2>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h2 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas en el Centro son tu mejor garantía</h2>
              <hr></hr>
              {body2}
              <Carrusel slides={slides} />

              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
              
              <div className='grid grid-cols-3 gap-2 max-xl:px-0 px-44 max-lg:grid-cols-2 max-sm:grid-cols-1'>
              <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia2.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia3.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia4.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>
    
<img
  src={'https://' + roomMedia5.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia6.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia7.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden'>

<img
  src={'https://' + roomMedia8.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2'
  />
  </div>
  <div className='border border-2 overflow-hidden '>

<img
  src={'https://' + roomMedia9.fields.file.url} alt="Habitación de una casa" width="300" height="380" className='h-64 hover:scale-125 hover:border-2 '
  />
  </div>
              </div>
              <p className='px-56 gap-10 max-xl:px-5'>{body4}</p>
              <Boton></Boton>
              <h2>Comienza eligiendo el tipo de Reforma que deseas en el Centro</h2>
              <hr ></hr>
              <p className='px-56 gap-10 max-xl:px-5'>{body5}</p>
              <div className='grid grid-cols-4 gap-5 max-xl:px-5 px-44 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <div className='border-2 border-gray p-2'>
                  <Link href="/aticos">
                  <img
                    src={'https://' + buildingMedia.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/banos">
                  <img
                    src={'https://' + buildingMedia2.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText2}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/cocinas">
                  <img
                    src={'https://' + buildingMedia3.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText3}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/edificios">
                  <img
                    src={'https://' + buildingMedia4.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText4}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/fachadas">
                  <img
                    src={'https://' + buildingMedia5.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText5}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/locales">
                  <img
                    src={'https://' + buildingMedia6.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText6}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/oficinas">
                  <img
                    src={'https://' + buildingMedia7.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText7}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/terrazas">
                  <img
                    src={'https://' + buildingMedia8.fields.file.url} alt="asdf" width="600" height="380" className='hover:opacity-50 h-44'
                  />
                  <p>{buildingText8}</p>
                  </Link>
                </div>

              </div>
            </article>

          </div>
        )
      })}
       {landingBarrios?.map((singlePost: any) => {
        const { body, title, bodyGrid, mediaGrid, bodyCentro } = singlePost.fields;
        return (
          <main key="centro">
            <article className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <Boton></Boton>
              <h3 className='px-56  max-xl:px-5'>{title}</h3>
              <hr ></hr>
              <div className='grid grid-cols-2 gap-5 px-44 max-xl:px-5 max-2xl:grid-cols-1'>
                <a className='mx-5'>{documentToReactComponents(bodyGrid)}</a>
                <img src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="600" height="480" />
              </div>
              <a className=' px-56 gap-10 max-xl:px-5 flex flex-col centrar text-left '>{documentToReactComponents(bodyCentro)}</a>

            </article>

          </main>
        )
      })}




    </main>
  )
}
