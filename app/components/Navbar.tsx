"use Client"
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='bg-blue-800 p-5 w-screen absolute top-0'>
      <nav >
        <ul className='flex flwx-row justify-between gap-10 mb-5 ml-96 mr-96 text-white'>
          <li><Link href="/"> Home</Link></li>
          <li className=' group  relative dropdown'>
            <a>Tipos</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto'>
            <ul className='bg-white text-black w-fit rounded p-3'>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
            </div>
          </li>
          <li className=' group  relative dropdown'>
            <a>Barrios</a>
            <div className='group-hover:block dropdown-menu absolute hidden h-auto'>
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
            <div className='group-hover:block dropdown-menu absolute hidden h-auto'>
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
        <p className='bg-amber-400 text-black rounded pl-3 pr-3 w-66'>SOLICITA TU PRESUPUESTO GRATIS</p>
        </ul>

      </nav>
    </div>
  )
}
