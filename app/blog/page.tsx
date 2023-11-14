/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';

export const metadata = {
  title: 'Blog de Reformas Valencia'
}

export default async function Blog() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const { blogMedia, blogMedia2, blogMedia3, blogMedia4, blogMedia5, blogMedia6, blogMedia7, blogMedia8, blogMedia9,
          blogText, blogText2, blogText3, blogText4, blogText5, blogText6, blogText7, blogText8, blogText9 } = singlePost.fields;
        return (
          <article key="asdf" className='grid grid-cols-3 max-xl:px-5 gap-5 mt-28 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col items-center '>
            <div className='' >
              <img
                src={'https://' + blogMedia.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia2.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText2}</p>
            </div>
            <div>
              <img
                src={'https://' + blogMedia3.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText3}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia4.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText4}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia5.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText5}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia6.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText6}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia7.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText7}</p>
            </div>
            <div >
              <img
                src={'https://' + blogMedia8.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText8}</p>
            </div>
            <div>
              <img
                src={'https://' + blogMedia9.fields.file.url} alt="asdf" width="400" height="380" className='h-52'
              />
              <p>{blogText9}</p>
            </div>
          </article>
        )
      })}
    </main>
  )
}
