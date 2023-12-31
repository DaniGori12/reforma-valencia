/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

export default function Whats() {

    const [openMenu, setOpenMenu] = useState(true)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (


        <div className="h-0">
            
                {
                    openMenu ?
            <button onClick={toggleMenu}>
                        <div className='flex items-center bg-green-500 rounded-full w-12 h-12 fixed right-4 bottom-8 z-20  duration-500 hover:scale-110 duration-500'>
                            <img
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                alt="asdf"
                                width="30"
                                height="30"
                                className="m-auto "
                                />
                        </div>
                                </button>
                        :
                        <div className='fixed right-4 bottom-8 z-10 '>
                                <div className='mb-2'>
                            <div className='bg-green-500 flex gap-2 w-64 p-2 rounded-t-lg relative '>

                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                    alt="asdf"
                                    width="40"
                                    height="40"
                                    className="m-auto py-3 mb-2"
                                />
                                <div>
                                    <p className='font-bold text-white text-right mr-5 '>Hola!</p>
                                    <p className='text-white text-sm text-left'>
                                        ¿Necesitas ayuda? Escríbenos para pedir una cita.</p>

                                </div>

                            </div>
                            <div className='w-64 p-2 border rounded-b-lg bg-white pb-5 hover:bg-slate-100'>
                                <p className='text-green-400 text-xs'>Online</p>
                               
                                <Link href={"/contacto"}> <p className='font-bold underline'>Reformas Valencia</p></Link>
                                <Link href={"/contacto"}>  <p className='text-sm underline'>Escribeme si me ves conectado</p></Link>
                              
                            </div>
                            </div>
                            <button onClick={toggleMenu} className='float-right hover:ease-in-out'>
                            <div className='flex items-center bg-green-600 rounded-full  w-12 h-12  duration-500 hover:scale-110 duration-500'>
                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                    alt="asdf"
                                    width="30"
                                    height="30"
                                    className="m-auto"
                                />
                            </div>
                            </button>
                        </div>

                }

        </div>
    )
}
