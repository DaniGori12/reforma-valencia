import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const metadata = {
  title: 'Política Cookies - Valencia Reforma'
}

export default async function Cookies() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const { cookies } = singlePost.fields;
        return (
          <article key="cont">
          <div key="cont" className='flex text-left mt-10'>
             <a className=' px-56 gap-10 max-xl:px-5'>{documentToReactComponents(cookies)}</a>

          </div>
          </article>
        )})}
        
        </main>





  )
}
