
import Link from 'next/link';
import { getData } from './services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Boton from './components/Boton';
import BotonTitle from './components/BotonTitle';
import Carrusel from './components/Carousel';
import { slides } from './services/slider'
import Form from './components/Form';


export default async function Home() {

  const landingTeam = await getData("homePage");
  const landingHome = await getData("homePage2");

  return (
    <main>

      {landingTeam?.map((singlePost: any) => {
        const { headerTitle, title2, headerBody, headerMedia, body, body2, body3, body4, body5, body6, gridText,
          buildingMedia, buildingMedia2, buildingMedia3, buildingMedia4, buildingMedia5, buildingMedia6,
          roomMedia, roomMedia2, roomMedia3, roomMedia4, roomMedia5, roomMedia6, roomMedia7, roomMedia8, roomMedia9,
          buildingMedia7, buildingMedia8, buildingText, buildingText2, buildingText3, buildingText4, buildingText5,
          buildingText6, buildingText7, buildingText8 } = singlePost.fields;
        return (
          <div key="asdf" className='flex flex-col text-center max-sm:mt-0 px-56 gap-10 max-xl:px-5 items-center'>
            <div className='max-h-72 w-screen pb-10 overflow-hidden relative'>
              <img
                src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='w-screen h-screen blur-sm -translate-y-10 '
              />
              <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold max-sm:top-10'>
                <p className='max-md:text-base  mx-5 flex titulo'> {headerTitle}</p>
                <p className='max-md:text-xs  mx-5 max-sm:text-lg titulo'>{headerBody}</p>
                <BotonTitle></BotonTitle>
              </div>
            </div>
            <div className='flex text-center flex-col items-center mt-20 px-56 gap-10 max-xl:px-5'>
              <h1>Descubre tu nueva empresa de Reformas en Valencia</h1>
              <hr></hr>
              <a className='text-lg leading-10 px-56 max-xl:px-5'>{documentToReactComponents(body)}</a>
              <div className='grid grid-cols-3 gap-2 px-56 gap-10 max-md:hidden'>{documentToReactComponents(gridText)}</div>
              <Boton></Boton>
              <h2 className='px-56 gap-10 max-xl:px-5'>Las opiniones de nuestros clientes de Reformas en Valencia son tu mejor garantía</h2>
              <hr></hr>
              {body2}

              <Carrusel slides={slides} />




              <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body3)}</a>

              <div className='grid grid-cols-3 gap-2 max-xl:px-5 px-44 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <img
                  src={'https://' + roomMedia.fields.file.url} alt="asdf" width="300" height="380" className='h-40'
                />
                <img
                  src={'https://' + roomMedia2.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia3.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia4.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia5.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia6.fields.file.url} alt="asdf" width="300" height="380" className='h-40'
                />
                <img
                  src={'https://' + roomMedia7.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia8.fields.file.url} alt="asdf" width="300" height="380" className='h-40 '
                />
                <img
                  src={'https://' + roomMedia9.fields.file.url} alt="asdf" width="300" height="380" className='h-40'
                />
              </div>
              <p className='px-56 gap-10 max-xl:px-5'>{body4}</p>
              <Boton></Boton>
              <h2>{title2}</h2>
              <hr ></hr>
              <p className='px-56 gap-10 max-xl:px-5'>{body5}</p>
              <div className='grid grid-cols-4 gap-5 max-2xl:px-5 px-44 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:items-center max-sm:flex-col '>
                <div className='border-2 border-gray p-2'>
                  <Link href="/aticos">
                    <img
                      src={'https://' + buildingMedia.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/banos">
                    <img
                      src={'https://' + buildingMedia2.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText2}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/cocinas">
                    <img
                      src={'https://' + buildingMedia3.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText3}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/edificios">
                    <img
                      src={'https://' + buildingMedia4.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText4}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/fachadas">
                    <img
                      src={'https://' + buildingMedia5.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText5}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/locales">
                    <img
                      src={'https://' + buildingMedia6.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText6}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/oficinas">
                    <img
                      src={'https://' + buildingMedia7.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-40'
                    />
                    <p>{buildingText7}</p>
                  </Link>
                </div>
                <div className='border-2 border-gray p-2'>
                  <Link href="/terrazas">
                    <img
                      src={'https://' + buildingMedia8.fields.file.url} alt="asdf" width="300" height="380" className='hover:opacity-50 h-44'
                    />
                    <p>{buildingText8}</p>
                  </Link>
                </div>
              </div>
              <a className=' px-56 gap-5 max-xl:px-5 items-center flex flex-col'>{documentToReactComponents(body6)}</a>
            </div>

          </div>


        )
      })}
      {landingHome?.map((singlePost: any) => {
        const { barrioMedia, barrioMedia2, barrioMedia3, barrioMedia4, barrioMedia5, barrioMedia6, barrioMedia7, barrioMedia8,
          barrioMedia9, barrioMedia10, barrioText, barrioText2, barrioText3, barrioText4, barrioText5, barrioText6, barrioText7, barrioText8,
          barrioText9, barrioText10, municipioMedia, municipioMedia2, municipioMedia3, municipioMedia4, municipioMedia5,
          municipioMedia6, municipioMedia7, municipioMedia8, municipioMedia9, municipioMedia10, media,
          municipioText, municipioText2, municipioText3, municipioText4, municipioText5, municipioText6, municipioText7, municipioText8,
          municipioText9, municipioText10, title, body, body2, body3, body4, body5 } = singlePost.fields;
        return (
          <div key="" className='flex flex-col text-center mt-20 px-56 gap-10 max-xl:px-5 items-center'>
            <div className='grid grid-cols-5 gap-2 max-xl:px-5 px-44 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center'>
              <div className='border-2 border-gray'>
                <Link href="/algiros">
                  <img
                    src={'https://' + barrioMedia6.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText6}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/benicalap">
                  <img
                    src={'https://' + barrioMedia7.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText7}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/benimaclet">
                  <img
                    src={'https://' + barrioMedia.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/campanar">
                  <img
                    src={'https://' + barrioMedia2.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText2}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/centro">
                  <img
                    src={'https://' + barrioMedia3.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText3}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/jesus">
                  <img
                    src={'https://' + barrioMedia8.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText8}</p>
                </Link>
              </div>

              <div className='border-2 border-gray'>
                <Link href="/olivereta">
                  <img
                    src={'https://' + barrioMedia9.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText9}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/patraix">
                  <img
                    src={'https://' + barrioMedia4.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText4}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/quatre">
                  <img
                    src={'https://' + barrioMedia5.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText5}</p>
                </Link>
              </div>


              <div className='border-2 border-gray'>
                <Link href="/rascanya">
                  <img
                    src={'https://' + barrioMedia10.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{barrioText10}</p>
                </Link>
              </div>

            </div>
            <a className=' flex flex-col items-center px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body)}</a>

            <div className='grid grid-cols-5 gap-2 max-xl:px-5 px-44 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
              <div className='border-2 border-gray '>
                <Link href="/alboraya">
                  <img
                    src={'https://' + municipioMedia.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/aldaya">
                  <img
                    src={'https://' + municipioMedia6.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText6}</p>
                </Link>
              </div>
              <div className='border-2 border-gray '>
                <Link href="/burjassot">
                  <img
                    src={'https://' + municipioMedia2.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText2}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/catarroja">
                  <img
                    src={'https://' + municipioMedia3.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText3}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/chirivella">
                  <img
                    src={'https://' + municipioMedia7.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText7}</p>
                </Link>
              </div>

              <div className='border-2 border-gray'>
                <Link href="/manises">
                  <img
                    src={'https://' + municipioMedia8.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText8}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/mislata">
                  <img
                    src={'https://' + municipioMedia9.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText9}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/paterna">
                  <img
                    src={'https://' + municipioMedia4.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText4}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/sagunto">
                  <img
                    src={'https://' + municipioMedia10.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText10}</p>
                </Link>
              </div>
              <div className='border-2 border-gray'>
                <Link href="/torrent">
                  <img
                    src={'https://' + municipioMedia5.fields.file.url} alt="asdf" width="300" height="380" className='h-40 hover:opacity-50'
                  />
                  <p>{municipioText5}</p>
                </Link>
              </div>




            </div>
            <a className=' flex flex-col items-center px-56 gap-10 max-xl:px-5'>{documentToReactComponents(body2)}</a>
            <Boton></Boton>
            <h3 className='px-56 max-xl:px-5'>{title}</h3>

            <hr ></hr>
            <div className='flex gap-5 px-56 max-xl:px-5 max-lg:flex-col justify-center text-center'>
              <a className=' max-xl:px-5 text-left'>{documentToReactComponents(body3)}</a>
              <Link href="/contacto">
                <img
                  src={'https://' + media.fields.file.url} alt="asdf" width="400" height="380" className='w-screen'
                />
              </Link>

            </div>
            <Boton></Boton>
            <a className=' px-56 items-center max-xl:px-5 flex flex-col text-left gap-5 '>{documentToReactComponents(body4)}</a>
            <div className='grid grid-cols-2 text-left gap-4 max-xl:px-5 px-44 max-lg:grid-cols-1'>

              <Form></Form>
              <a>{documentToReactComponents(body5)}</a>

            </div>
          </div>
        )
      })}



    </main>
  )
}
