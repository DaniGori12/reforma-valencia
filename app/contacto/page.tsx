/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Form from '../components/Form';

export const metadata = {
  title: 'Contacto - Valencia Reforma'
}


export default async function Contacto() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const { contactoGrid, contactoGridMedia } = singlePost.fields;
        return (
          <article key="cont" className='flex text-center flex-col items-center mt-14 px-56 gap-10 max-xl:px-5' >
            <h1 className=' flex items-center'>Contacto</h1>
            <div className='flex max-lg:flex-col gap-5'>
            <a className=' max-xl:px-5'>{documentToReactComponents(contactoGrid)}</a>
            <img src={'https://' + contactoGridMedia.fields.file.url} alt="asdf" width="400" height="480"/>
            </div>
            

            <Form></Form>
              

            

          </article>
        )})}
        
        </main>





  )
}
