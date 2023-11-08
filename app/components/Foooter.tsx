import Link from 'next/link'
import React from 'react'

export default function Foooter() {
  return (
    <div className='grid grid-cols-3 bg-cyan-950 w-screen gap-5 text-white mt-10 pt-5 max-lg:grid-cols-1 max-xl:px-5 px-44'>
        <div className='mx-44 max-sm:mx-5 w-max'>
            <h4 className='text-white'>DATOS DE CONTACTO</h4>
            <div className='flex max-lg:block gap-1'>
            <p className='font-bold'>Dirección:</p>  
            <p> Plaza del Ayuntamiento, 12</p>      
            </div>
            <div className='flex gap-1'>
                <p className='font-bold'>Teléfono:</p>
                <p> 612360392</p>
            </div>
        </div>
        <div className='flex flex-col mx-44 max-sm:mx-5 w-max'>
            <h4 className=' text-white'>NUESTROS SERVICIOS</h4>
            <Link href="/alboraya" className='hover:underline'>Reformas en Alboraya</Link>
            <Link href="/burjassot" className='hover:underline'>Reformas en Burjassot</Link>
            <Link href="/catarroja" className='hover:underline'>Reformas en Catarroja</Link>
            <Link href="/paterna" className='hover:underline'>Reformas en Paterna</Link>
            <Link href="/torrent" className='hover:underline'>Reformas en Torrent</Link>
        </div>
        <div className='flex flex-col mx-44 max-sm:mx-5 w-max'>
            <h4 className='text-white'>SOBRE NOSOTROS</h4>
            <Link href="/blog" className='hover:underline'>Blog</Link>
            <Link href="/contacto" className='hover:underline'>Contacto</Link>
            <Link href="/aviso" className='hover:underline'>Aviso Legal</Link>
            <Link href="/privacidad" className='hover:underline'>Política de Privacidad</Link>
            <Link href="/cookies" className='hover:underline'>Política de Cookies</Link>
        </div>
            
            
        

    </div>
  )
}
