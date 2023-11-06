/* eslint-disable @next/next/no-img-element */
import { getData } from './services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default async function Home() {

  const landingTeam = await getData("homePage");

  return (
    <main>
      

        {landingTeam?.map((singlePost: any) => {
          const { headerTitle, headerBody, headerMedia, body, title,  gridText } = singlePost.fields;
          return (
            <div key="asdf">
<div className='max-h-72 w-screen pb-10 overflow-hidden relative'>
<img
            src={'https://' + headerMedia.fields.file.url} alt="asdf" width="600" height="380" className='z-0 w-screen '    
          />
                <div className=' flex flex-col gap-5 items-center absolute inset-x-0 top-20 text-white font-bold'>
                  <p className='text-lg'> {headerTitle}</p>
                  <p className='text-xl mx-5'>{headerBody}</p>
                  <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button> 
                </div>
</div>
<div className=' flex text-center flex-col items-center mt-10 px-44 max-xl:px-5'> 
            <h3>Descubre tu nueva empresa de Reformas en Barcelona, que sí cumple con lo que promete</h3>
            <hr className='h-1 border-1 bg-amber-400 mt-5 mb-5 w-1/5'></hr>
            <p className=''>{body}</p>

</div>

            </div>


          )
        })}


      
    </main>
  )
}
