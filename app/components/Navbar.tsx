"use Client"
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-blue-800 p-5 w-screen relative top-0 '>
      <nav >
        <ul className='flex flex-row justify-center gap-20 mb-5 text-white'>
          <li><Link href="/"> Home</Link></li>
          <li className=' group relative dropdown'>
            <a>Tipos</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto'>
            <ul className='bg-white text-black w-fit rounded p-3 absolute z-10'>
              <li><Link href="/aticos">Áticos</Link></li>
              <li><Link href="/banos">Baños</Link></li>
              <li><Link href="/cocinas">Cocinas</Link></li>
              <li><Link href="/edificios">Edificios</Link></li>
              <li><Link href="/fachadas">Fachadas</Link></li>
              <li><Link href="/locales">Locales</Link></li>
              <li><Link href="/oficinas">Oficinas</Link></li>
              <li><Link href="/terrazas">Terrazas</Link></li>

            </ul>
            </div>
          </li>
          <li className=' group  relative dropdown'>
            <a>Barrios</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10'>
            <ul className='bg-white text-black w-fit rounded  p-3'>
              <li><Link href="/benimaclet">Benimaclet</Link></li>
              <li><Link href="/campanar">Campanar</Link></li>
              <li><Link href="/centro">Centro</Link></li>
              <li><Link href="/patraix">Patraix</Link></li>
              <li><Link href="/quatre">Quatre Carreres</Link></li>

            </ul>
            </div>
          </li>
          <li className=' group  relative dropdown'>
            <a>Municipios</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto absolute z-10'>
            <ul className='bg-white text-black w-fit rounded p-3'>
              <li><Link href="/alboraya">Alboraya</Link></li>
              <li><Link href="/burjassot">Burjassot</Link></li>
              <li><Link href="/catarroja">Catarroja</Link></li>
              <li><Link href="/paterna">Paterna</Link></li>
              <li><Link href="/torrent">Torrent</Link></li>

            </ul>
            </div>
          </li>

          <li><Link href="/blog">Blog</Link></li>
        <p className='botonNav '>SOLICITA TU PRESUPUESTO GRATIS</p>
        </ul>

      </nav>
    </div>
  )
}
