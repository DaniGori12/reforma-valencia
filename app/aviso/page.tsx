import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const metadata = {
  title: 'Aviso legal Valencia Reformas'
}

export default async function Aviso() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const {avisoLegal} = singlePost.fields;
        return (
          <div key="cont" className='flex text-left mt-24'>
             <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(avisoLegal)}</a>

          </div>
        )})}
        
        </main>





  )
}
