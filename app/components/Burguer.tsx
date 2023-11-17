"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Burguer() {
    const [openMenu, setOpenMenu] = useState(true)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    
  return (
    <div>
     <div className='bg-cyan-950 w-screen h-12 z-10 fixed left-0 top-0 xl:2xl:hidden md:hidden lg:hidden'></div>
<nav className='fixed flex z-10 left-0 top-0'>

        {!openMenu ? 
        <div className='bg-cyan-950 w-32 z-100 top-0 left-0 pl-5 rounded-xl xl:2xl:hidden md:hidden lg:hidden'>
    <div>
    <nav className='bg-cyan-950 text-white rounded-xl'>
      <ul className=' text-white flex-col text-left'>   

      <button onClick={toggleMenu} className=' bg-cyan-950 text-white mt-1' >
      <p className='text-red-400'>X</p>
      </button>
      <div>

        <li><Link href="/">Home</Link></li>
        <li className=' group  dropdown  z-10'>
          <a>Tipos</a>
          <div className='group-hover:block dropdown-menu pl-28  hidden h-auto z-100 '>
          <ul className='bg-white text-black w-max rounded p-3 absolute z-10'>
            <li className='hover:bg-gray-100 '><Link href="/aticos">Reformas de Áticos</Link></li>
            <li className='hover:bg-gray-100'><Link href="/cocinas">Reformas de Cocinas</Link></li>
            <li className='hover:bg-gray-100'><Link href="/banos">Reformas de Baños</Link></li>
            <li className='hover:bg-gray-100'><Link href="/edificios">Reformas de Edificios</Link></li>
            <li className='hover:bg-gray-100'><Link href="/fachadas">Reformas de Fachadas</Link></li>
            <li className='hover:bg-gray-100'><Link href="/locales">Reformas de Locales</Link></li>
            <li className='hover:bg-gray-100'><Link href="/oficinas">Reformas de Oficinas</Link></li>
            <li className='hover:bg-gray-100'><Link href="/terrazas">Reformas de Terrazas</Link></li>

          </ul>
          </div>
        </li>
      </div>
        <li className='group dropdown'>
          <a>Zonas</a>
          <div className='group-hover:block dropdown-menu pl-28 hidden h-auto z-10'>
          <ul className='bg-white text-black w-max rounded absolute p-3 z-100'>
            <li className='hover:bg-gray-100'><Link href="/algiros">Reformas en Algirós</Link></li>
            <li className='hover:bg-gray-100'><Link href="/benicalap">Reformas en Benicalap</Link></li>
            <li className='hover:bg-gray-100'><Link href="/benimaclet">Reformas en Benimaclet</Link></li>
            <li className='hover:bg-gray-100'><Link href="/campanar">Reformas en Campanar</Link></li>
            <li className='hover:bg-gray-100'><Link href="/centro">Reformas en el Centro</Link></li>
            <li className='hover:bg-gray-100'><Link href="/jesus">Reformas en Jesús</Link></li>
            <li className='hover:bg-gray-100'><Link href="/olivereta">Reformas en Olivereta</Link></li>
            <li className='hover:bg-gray-100'><Link href="/patraix">Reformas en Patraix</Link></li>
            <li className='hover:bg-gray-100'><Link href="/quatre">Reformas en Quatre Carreres</Link></li>
            <li className='hover:bg-gray-100'><Link href="/rascanya">Reformas en Rascanya</Link></li>

          </ul>
          </div>
        </li>
        <li className='group  dropdown'>
          <a>Municipios</a>
          <div className='group-hover:block dropdown-menu  hidden h-auto flex pl-28 z-10 '>
          <ul className='bg-white text-black w-max rounded absolute z-10 p-3'>
            <li className='hover:bg-gray-100'><Link href="/alboraya">Reformas en Alboraya</Link></li>
            <li className='hover:bg-gray-100'><Link href="/aldaya">Reformas en Aldaya</Link></li>
            <li className='hover:bg-gray-100'><Link href="/burjassot">Reformas en Burjassot</Link></li>
            <li className='hover:bg-gray-100'><Link href="/catarroja">Reformas en Catarroja</Link></li>
            <li className='hover:bg-gray-100'><Link href="/chirivella">Reformas en Chirivella</Link></li>
            <li className='hover:bg-gray-100'><Link href="/manises">Reformas en Manises</Link></li>
            <li className='hover:bg-gray-100'><Link href="/mislata">Reformas en Mislata</Link></li>
            <li className='hover:bg-gray-100'><Link href="/paterna">Reformas en Paterna</Link></li>
            <li className='hover:bg-gray-100'><Link href="/sagunto">Reformas en Sagunto</Link></li>
            <li className='hover:bg-gray-100'><Link href="/torrent">Reformas en Torrent</Link></li>

          </ul>
          </div>
        </li>

        <li><Link href="/blog">Blog</Link></li>
    
      </ul>

    </nav>
  </div>
 </div>
  : 
  <button onClick={toggleMenu} className='m-auto bg-cyan-950 w-10 justify-center flex text-center text-white mt-2 ml-1 p-1  top-0 left-0 z-10 rounded-xl xl:2xl:hidden lg:hidden md:hidden m-2' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

  </button>
    }
    </nav>
    </div>
  )
}