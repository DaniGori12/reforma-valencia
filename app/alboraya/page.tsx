/* eslint-disable @next/next/no-img-element */
import { getData } from '../services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function Alboraya() {

  const landingTeam = await getData("homePage");

  return (
    <main>


      {landingTeam?.map((singlePost: any) => {
        const { headerTitle, title2, headerBody, headerMedia, body, body2, body3, body4, body5, gridText,
          carrouselMedia, buildingMedia, buildingMedia2, buildingMedia3, buildingMedia4, buildingMedia5, buildingMedia6,
          roomMedia, roomMedia2, roomMedia3, roomMedia4, roomMedia5, roomMedia6, roomMedia7, roomMedia8, roomMedia9,
          buildingMedia7, buildingMedia8, buildingText, buildingText2, buildingText3, buildingText4, buildingText5,
          buildingText6, buildingText7, buildingText8 } = singlePost.fields;
        return (
          <div key="asdf">
            <div className='max-h-72 w-screen pb-10 overflow-hidden relative bg-black '>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold'>
                <p className='text-lg'> Reformas Integrales en Alboraya</p>
                <p className='text-xl mx-5'>{headerBody}</p>
                <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h3>Descubre tu nueva empresa de Reformas en Alboraya, que sí cumple con lo que promete</h3>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
              <h3 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas en Alboraya son tu mejor garantía</h3>
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
              <h2>Comienza eligiendo el tipo de Reforma que deseas en Alboraya</h2>
              <hr ></hr>
            </div>
          </div>
        )
      })}



    </main>
  )
}
