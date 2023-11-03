/* eslint-disable @next/next/no-img-element */
import { getData } from './services/fetchService';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default async function Home() {

  const landingTeam = await getData("homePage");

  return (
    <main>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        {landingTeam?.map((singlePost: any) => {
          const { title, gridText } = singlePost.fields;
          return (
            <p key="asdf">{title}
            <div className='grid grid-cols-3 gap-5 mt-5'>
             {documentToReactComponents(gridText)}
            </div>

           
            </p>
          )
        })}


      </div>
    </main>
  )
}
