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


        {openMenu ? 
        <div className='bg-cyan-950 w-44 absolute top-0 left-0 pl-5 rounded-xl'>
      <button onClick={toggleMenu} className='m-auto bg-cyan-950 text-white ' >Menu desplegable</button>
    <div >
    <nav className='relative z-10 bg-cyan-950 text-white'>
      <ul className='m:gap-0 text-white flex-col pl-5'>
        <li><Link href="/">Home</Link></li>
        <li className=' group relative dropdown '>
          <a>Tipos</a>
          <div className='group-hover:block dropdown-menu absolute hidden h-auto left-24'>
          <ul className='bg-white text-black w-max  rounded p-3 absolute z-10'>
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
        <li className='group relative dropdown'>
          <a>Zonas</a>
          <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10 left-24'>
          <ul className='bg-white text-black w-max rounded  p-3'>
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
        <li className='group relative dropdown'>
          <a>Municipios</a>
          <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10 left-24'>
          <ul className='bg-white text-black w-max rounded p-3'>
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
  <button onClick={toggleMenu} className='m-auto bg-cyan-950 text-white p-1 absolute top-0 left-0 pl-5' >Menu desplegable</button>
    }
    </div>
  )
}
