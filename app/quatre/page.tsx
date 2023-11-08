/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Quatre() {

  const landingTeam = await getData("homePage");
  const landingBarrios = await getData("barrios");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const { headerBody, headerMedia, body, body2, body3, body4, body5, gridText,
          carrouselMedia, buildingMedia, buildingMedia2, buildingMedia3, buildingMedia4, buildingMedia5, buildingMedia6,
          roomMedia, roomMedia2, roomMedia3, roomMedia4, roomMedia5, roomMedia6, roomMedia7, roomMedia8, roomMedia9,
          buildingMedia7, buildingMedia8, buildingText, buildingText2, buildingText3, buildingText4, buildingText5,
          buildingText6, buildingText7, buildingText8 } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-72 w-screen pb-10 overflow-hidden relative '>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen blur-sm'
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold max-sm:top-10'>
                <p className='text-lg'> Reformas integrales en Quatre Carreres</p>
                <p className='text-xl mx-5 max-sm:text-lg'>{headerBody}</p>
                <button className='boton max-sm:hidden'>SOLICITA TU PRESUPUESTO GRATIS</button>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h3>Descubre tu nueva empresa de Reformas en Quatre Carreres, que sí cumple con lo que promete</h3>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-xl:px-5'>{documentToReactComponents(gridText)}</div>
              <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              <h3 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas en Quatre carreres son tu mejor garantía</h3>
              <hr></hr>
              {body2}
              <p className='bg-cyan-800 text-white pt-6  w-1/2 h-24' >Esto debería de ser el carrusel</p>

              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>
              
              <div className='grid grid-cols-3 gap-2 max-xl:px-5 px-44 max-lg:grid-cols-2 max-sm:grid-cols-1'>
              <img
                    src={'https://' + roomMedia.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia2.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia3.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia4.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia5.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia6.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia7.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia8.fields.file.url} alt="asdf" width="300" height="380"
                  />
              <img
                    src={'https://' + roomMedia9.fields.file.url} alt="asdf" width="300" height="380"
                  />
              </div>
              <p className='px-56 gap-10 max-xl:px-5'>{body4}</p>
              <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              <h2>Comienza eligiendo el tipo de Reforma que deseas en Quatre carreres</h2>
              <hr ></hr>
              <p className='px-56 gap-10 max-xl:px-5'>{body5}</p>
              <div className='grid grid-cols-4 gap-5 max-xl:px-5 px-44 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <div className='border-2 border-gray p-2'>
                  <Link href="/aticos">
                  <img
                    src={'https://' + buildingMedia.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/banos">
                  <img
                    src={'https://' + buildingMedia2.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText2}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/cocinas">
                  <img
                    src={'https://' + buildingMedia3.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText3}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/edificios">
                  <img
                    src={'https://' + buildingMedia4.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText4}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/fachadas">
                  <img
                    src={'https://' + buildingMedia5.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText5}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/locales">
                  <img
                    src={'https://' + buildingMedia6.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText6}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/oficinas">
                  <img
                    src={'https://' + buildingMedia7.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText7}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/terrazas">
                  <img
                    src={'https://' + buildingMedia8.fields.file.url} alt="asdf" width="600" height="380"
                  />
                  <p>{buildingText8}</p>
                  </Link>
                </div>

              </div>
            </div>

          </div>


        )
      })}
      {landingBarrios?.map((singlePost: any) => {
        const {body, title, bodyGrid, mediaGrid, bodyQuatre } = singlePost.fields;
        return (
          <main key="qua">
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
            <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body)}</a>
            <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
            <h3 className='px-56  max-xl:px-5'>{title}</h3>
            <hr ></hr>
            <div className='grid grid-cols-2 gap-5 px-44 max-xl:px-5 max-2xl:grid-cols-1'>
            <a className='mx-5'>{documentToReactComponents(bodyGrid)}</a>
            <img src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="600" height="480"/>
            </div>
            <a className=' px-56 gap-10 max-xl:px-5 flex flex-col centrar text-left'>{documentToReactComponents(bodyQuatre)}</a>

            </div>

            </main>
        )})}



    </main>
  )
}
