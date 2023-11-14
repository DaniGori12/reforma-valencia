import Link from 'next/link'
import React from 'react'

export default function BotonTitle() {
  return (
    <div>
        <Link href="/#presupuesto">
        <button className='boton max-sm:text-sm '>SOLICITA TU PRESUPUESTO GRATIS</button>
        </Link>

    </div>
  )
}
