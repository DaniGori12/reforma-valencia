"use Client"
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-cyan-950 w-screen relative top-0 '>
      <nav >
        <ul className='flex flex-row justify-center gap-20 py-5 text-white max-md:block max-md:mx-5'>
          <li><Link href="/">Home</Link></li>
          <li className=' group relative dropdown '>
            <div className='flex gap-1 '>
            <a>Tipos</a>
           
            </div>
            

            <div className='group-hover:block dropdown-menu absolute hidden h-auto '>
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
            <a>Barrios</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10'>
            <ul className='bg-white text-black w-max rounded  p-3'>
              <li className='hover:bg-gray-100'><Link href="/benimaclet">Reformas en Benimaclet</Link></li>
              <li className='hover:bg-gray-100'><Link href="/campanar">Reformas en Campanar</Link></li>
              <li className='hover:bg-gray-100'><Link href="/centro">Reformas en el Centro</Link></li>
              <li className='hover:bg-gray-100'><Link href="/patraix">Reformas en Patraix</Link></li>
              <li className='hover:bg-gray-100'><Link href="/quatre">Reformas en Quatre Carreres</Link></li>

            </ul>
            </div>
          </li>
          <li className='group relative dropdown'>
            <a>Municipios</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10'>
            <ul className='bg-white text-black w-max rounded p-3'>
              <li className='hover:bg-gray-100'><Link href="/alboraya">Reformas en Alboraya</Link></li>
              <li className='hover:bg-gray-100'><Link href="/burjassot">Reformas en Burjassot</Link></li>
              <li className='hover:bg-gray-100'><Link href="/catarroja">Reformas en Catarroja</Link></li>
              <li className='hover:bg-gray-100'><Link href="/paterna">Reformas en Paterna</Link></li>
              <li className='hover:bg-gray-100'><Link href="/torrent">Reformas en Torrent</Link></li>

            </ul>
            </div>
          </li>

          <li><Link href="/blog">Blog</Link></li>
        <button className='botonNav max-lg:hidden'><a href="/#presupuesto">SOLICITA TU PRESUPUESTO GRATIS</a></button>
        </ul>

      </nav>
    </div>
  )
}
