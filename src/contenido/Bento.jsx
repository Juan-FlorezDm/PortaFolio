import React from "react";
import '../styles/Bento.css'
import Proyecto from "./Proyecto";

export default function Bento(){
    return(
        <>
            <div className="Proyectos">
                <section className="Proyecto_uno">
                    <a href="https://github.com/Juan-FlorezDm/BackendBanco">
                        <Proyecto 
                            descripcion="Creacion de usarios y manejo de cuentas conectada con una base de datos en mysql hecha con java"
                            titulo="Sistema Backend para un banco"
                            video="../../public/Backend.mp4"
                        />
                    </a>
                </section>
                <section className="Proyect_dos">
                    <a href="">
                        <Proyecto 
                            descripcion="Pequeña pagina que consume una api para generar chistes "
                            titulo="Chiste malo"
                            video="../../public/card.jpg"
                        />
                    </a>
                </section>
                <section className="Proyecto_tres">
                    <a href="https://github.com/Juan-FlorezDm/ProyectoFinal">
                        <Proyecto 
                            descripcion="Asistencia de una clase que exporta datos en archivo csv, realizado como proyecto final para el Bootcamp de Mision TIC"
                            titulo="Asistencia y reporte"
                            video="../../public/card.jpg"
                        />
                    </a>
                </section>
                <section className="Proyecto_cuatro">
                    <a href="https://github.com/Juan-FlorezDm/Invetario">
                        <Proyecto 
                            descripcion="Desarrollo en PHP y conectado en MySQL, sistema de gestion de inventarios de equipos de computo"
                            titulo="Plataforma de inventario"
                            video="../../public/Video_pagina.mp4"
                        />
                    </a>
                </section>
                <section className="Proyecto_cinco">
                    <a href="">
                        <Proyecto 
                            descripcion="Juan"
                            titulo="Diego"
                            video="../../public/card.jpg"
                        />
                    </a>
                </section>
            </div>
        </>
    );
}