import Link from 'next/link'
import React from 'react'

export default function Foooter() {
  return (
    <div className='grid grid-cols-3 bg-cyan-950 w-screen gap-5 text-white mt-10 pt-5 max-xl:grid-cols-1'>
        <div className='mx-44 max-sm:mx-5 w-max'>
            <h4 className='font-extrabold gap-1'>Datos de contacto</h4>
            <div className='flex max-lg:block gap-1'>
            <p className='font-bold'>Dirección:</p>  
            <p> Calle Pepe 12</p>      
            </div>
            <div className='flex gap-1'>
                <p className='font-bold'>Teléfono:</p>
                <p> 612360392</p>
            </div>
        </div>
        <div className='flex flex-col mx-44 max-sm:mx-5 w-max'>
            <h4 className='font-extrabold'>Nuestros Servicios</h4>
            <Link href="/alboraya">Reformas en Alboraya</Link>
            <Link href="/burjassot">Reformas en Burjassot</Link>
            <Link href="/catarroja">Reformas en Catarroja</Link>
            <Link href="/paterna">Reformas en Paterna</Link>
            <Link href="/torrent">Reformas en Torrent</Link>
        </div>
        <div className='flex flex-col mx-44 max-sm:mx-5'>
            <h4 className='font-extrabold'>Sobre nosotros</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/contacto">Contacto</Link>
        </div>
            
            
        

    </div>
  )
}
