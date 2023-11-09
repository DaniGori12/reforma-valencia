/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"


export function Carrusel() {
    return (
  

            <div className="carousel w-1/2 max-lg:w-screen ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="flex items-center">
                            <div>
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center rounded-full uppercase text-lg font-bold mr-4">
                                        J
                                    </div>
                                    
                                    <p className=" flex  font-bold">Juan Pérez</p>
                                </div>
                                <div className="text-yellow-500">★★★★★</div>
                                <p className="text-2xl font-bold text-cyan-950">Experiencia Increíble</p>
                                <p className="text-gray-800 mt-2">Utilicé los servicios de reforma de terrazas y quedé impresionado. El diseño
                                    personalizado reflejó exactamente mis gustos, y la ejecución fue impecable. El equipo altamente cualificado
                                    y el control de calidad riguroso hacen de esta empresa la mejor opción en Valencia.</p>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="flex items-center">
                            <div>
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center rounded-full uppercase text-lg font-bold mr-4">
                                        M
                                    </div>
                                    <p className=" flex  font-bold">María López</p>
                                </div>
                                <div className="flex justify-center">

                                    <div className="text-yellow-500">★★★★</div>
                                    <div className="text-gray-400">★</div>
                                </div>
                                <p className="text-2xl font-bold text-cyan-950">Maravillosa Transformación</p>
                                <p className="text-gray-800 mt-2">Contraté sus servicios para la reforma integral de mi oficina y fue una decisión
                                    acertada. El diseño de interiores y la atención personalizada hicieron que mi espacio de trabajo sea
                                    ahora funcional y estéticamente agradable. La calidad del trabajo es insuperable.</p>
                            </div>
                        </div><a href="#slide3" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="flex items-center">
                            <div>
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center rounded-full uppercase text-lg font-bold mr-4">
                                        J
                                    </div>
                                    <p className="flex font-bold">Manuel Sánchez</p>
                                </div>
                                <div className="text-yellow-500">★★★★★</div>
                                <p className="text-2xl font-bold text-cyan-950">Quedó espectacular</p>
                                <p className="text-gray-800 mt-2">Contraté la empresa para reformar mi oficina, y el resultado superó mis expectativas.
                                    El diseño de interiores moderno y la eficiencia en la ejecución fueron impresionantes.
                                    Recomiendo encarecidamente sus servicios a cualquiera que busque calidad y profesionalismo en Valencia.</p>
                            </div>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="flex items-center">
                            <div>
                                <div className="flex justify-center">
                                    <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center rounded-full uppercase text-lg font-bold mr-4">
                                        AM
                                    </div>
                                    <p className="flex font-bold">Ana Martínez</p>
                                </div>
                                <div className="text-yellow-500">★★★★★</div>
                                <p className="text-2xl font-bold text-cyan-950">Se lo recomendaré a mis familiares</p>
                                <p className="text-gray-800 mt-2">Copté por sus servicios de reforma integral para mi local comercial.
                                    La adaptabilidad a mis necesidades y el diseño personalizado hicieron la diferencia.
                                    Aunque hubo algunos contratiempos, el equipo los manejó con profesionalismo. Recomendado en Torrent.</p>
                            </div>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

       
    );
}