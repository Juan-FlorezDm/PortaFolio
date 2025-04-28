import React from "react";
import '../styles/Bento.css'
import Proyecto from "./Proyecto";
import Backend from '../../public/Backend.mp4'
import card from '../../public/card.jpg'
import VideoPagina from '../../public/Video_pagina.mp4'
import gif_dos from '../../public/gif_dos.gif'
import gif_uno from '../../public/gif_uno.gif'
import gif_tres from '../../public/gif_tres.gif'


export default function Bento(){
    return(
        <>
            <div className="Proyectos">
                <section className="Proyecto_uno">
                    <a href="https://github.com/Juan-FlorezDm/BackendBanco">
                        <Proyecto 
                            descripcion="Creacion de usarios y manejo de cuentas conectada con una base de datos en mysql hecha con java"
                            titulo="Sistema Backend para un banco"
                            video={Backend}
                        />
                    </a>
                </section>
                <section className="Proyecto_dos">
                    <a href="">
                        <Proyecto 
                            descripcion="Pequeña pagina que consume una api para generar chistes "
                            titulo="Chiste malo"
                            video={card}
                        />
                    </a>
                </section>
                <section className="Proyecto_tres">
                    <a>
                        <Proyecto 
                            titulo="deco"
                            video={gif_dos}
                        />
                    </a>
                </section>
                <section className="Proyecto_cuatro">
                    <a href="https://github.com/Juan-FlorezDm/Invetario">
                        <Proyecto 
                            descripcion="Desarrollo en PHP y conectado en MySQL, sistema de gestion de inventarios de equipos de computo"
                            titulo="Plataforma de inventario"
                            video={VideoPagina}
                        />
                    </a>
                </section>
                <section className="Proyecto_cinco">
                    <a>
                        <Proyecto 
                            titulo="deco"
                            video={gif_uno}
                        />
                    </a>
                </section>
                <section className="Proyecto_seis">
                    <a href="https://github.com/Juan-FlorezDm/ProyectoFinal">
                        <Proyecto 
                            descripcion="Asistencia de una clase que exporta datos en archivo csv, realizado como proyecto final para el Bootcamp de Mision TIC"
                            titulo="Asistencia y reporte"
                            video={card}
                        />
                    </a>
                </section>
                <section className="Proyecto_siete">
                    <a>
                        <Proyecto 
                            titulo="deco"
                            video={gif_tres}
                        />
                    </a>
                </section>
                <section className="Proyecto_ocho">
                    <a href="">
                        <Proyecto 
                            descripcion="Juan"
                            titulo="Diego"
                            video={card}
                        />
                    </a>
                </section>
                {/* <div className="Proyecto_uno">Proyecto 1</div>
                <div className="Proyecto_dos">Proyecto 2</div>
                <div className="Proyecto_tres">Proyecto 3</div>
                <div className="Proyecto_cuatro">Proyecto 4</div>
                <div className="Proyecto_cinco">Proyecto 5</div>
                <div className="Proyecto_seis">Proyecto 6</div>
                <div className="Proyecto_siete">Proyecto 7</div>
                <div className="Proyecto_ocho">Proyecto 8</div> */}
            </div>
        </>
    );
}