import { getData } from './services/fetchService';
import { createClient } from "contentful";


export default async function Home() {

  const landingTeam = await getData("homePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>asdfsgfg</p>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        {landingTeam?.map((singlePost: any) => {
          const { title } = singlePost.fields;
          return (
            <p key="asdf">{title}</p>
          )
        })}


      </div>
    </main>
  )
}
