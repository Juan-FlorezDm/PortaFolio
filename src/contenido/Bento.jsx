import React from "react";
import '../styles/Bento.css'
import Proyecto from "./Proyecto";
import Backend from '../../public/Backend.mp4'
import VideoPagina from '../../public/Video_pagina.mp4'
import gif_dos from '../../public/gif_dos.gif'
import gif_uno from '../../public/gif_uno.gif'
import gif_tres from '../../public/gif_tres.gif'
import VideoEcommerce from '../../public/video_e-commerce.mov'


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
                    <a href="https://github.com/Juan-FlorezDm/proyecto_final_u">
                        <Proyecto 
                            titulo="E-commerce"
                            descripcion="E-commerce de productos, con vista adminstrativa y de usuario, desplegada en la web"
                            video={VideoEcommerce}
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
            </div>
        </>
    );
}