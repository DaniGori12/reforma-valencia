import Link from 'next/link'
import React from 'react'

export default function Boton() {
  return (
    <div>
        <Link href="/#presupuesto">
        <button className='boton'>SOLICITA TU PRESUPUESTO GRATIS</button>
        </Link>

    </div>
  )
}
