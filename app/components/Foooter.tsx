import Link from 'next/link'
import React from 'react'

export default function Foooter() {
  return (
    <footer className='grid grid-cols-3 bg-cyan-950 w-screen gap-5 text-white mt-10 pt-5 max-lg:grid-cols-1 max-xl:px-5 px-44 leading-6 text-sm pb-2'>
        <div className='mx-44 max-sm:mx-5 w-max'>
            <h4 className='text-white text-sm'>DATOS DE CONTACTO</h4>
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
            <h4 className=' text-white text-sm'>NUESTROS SERVICIOS</h4>
            <Link href="/alboraya" className='hover:underline'>Reformas en Alboraya</Link>
            <Link href="/aldaya" className='hover:underline'>Reformas en Aldaya</Link>
            <Link href="/burjassot" className='hover:underline'>Reformas en Burjassot</Link>
            <Link href="/catarroja" className='hover:underline'>Reformas en Catarroja</Link>
            <Link href="/chirivella" className='hover:underline'>Reformas en Chirivella</Link>
            <Link href="/manises" className='hover:underline'>Reformas en Manises</Link>
            <Link href="/mislata" className='hover:underline'>Reformas en Mislata</Link>
            <Link href="/paterna" className='hover:underline'>Reformas en Paterna</Link>
            <Link href="/sagunto" className='hover:underline'>Reformas en Sagunto</Link>
            <Link href="/torrent" className='hover:underline'>Reformas en Torrent</Link>
        </div>
        <div className='flex flex-col mx-44 max-sm:mx-5 w-max'>
            <h4 className='text-white text-sm'>SOBRE NOSOTROS</h4>
            <Link href="/blog" className='hover:underline'>Blog</Link>
            <Link href="/contacto" className='hover:underline'>Contacto</Link>
            <Link href="/aviso" className='hover:underline'>Aviso Legal</Link>
            <Link href="/privacidad" className='hover:underline'>Política de Privacidad</Link>
            <Link href="/cookies" className='hover:underline'>Política de Cookies</Link>
        </div>
            
            
        

    </footer>
  )
}
