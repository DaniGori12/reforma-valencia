/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';

export default async function Blog() {
  const landingTeam = await getData("blog");
  return (
    <main>
      {landingTeam?.map((singlePost: any) => {
        const { blogMedia, blogMedia2, blogMedia3, blogMedia4, blogMedia5, blogMedia6, blogMedia7, blogMedia8, blogMedia9,
          blogText, blogText2, blogText3, blogText4, blogText5, blogText6, blogText7, blogText8, blogText9 } = singlePost.fields;
        return (
          <div key="asdf" className='grid grid-cols-3 max-xl:px-5 px-44 m-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia2.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText2}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia3.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText3}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia4.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText4}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia5.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText5}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia6.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText6}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia7.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText7}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia8.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText8}</p>
            </div>
            <div className='p-2'>
              <img
                src={'https://' + blogMedia9.fields.file.url} alt="asdf" width="400" height="380"
              />
              <p>{blogText9}</p>
            </div>
          </div>
        )
      })}
    </main>
  )
}
