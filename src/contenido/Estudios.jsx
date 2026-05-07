import React from "react";
import Info from "./Estudio";
import '../styles/Estudio.css'
import Grado from '../../public/Grado.png'
import Bootcamp from '../../public/diploma_bootcamp.png'

import { Timeline } from "flowbite-react";

export default function Estudios(){
    return(
        <>
            <h1>Estudios</h1>
            <div className="section_estudios">

                    <Info 
                    titulo="Bootcamp Desarrollo web Full Stack"
                    descripcion="Curso Básico de Desarrollo Web Fullstack 
                    manejando Conceptos de HTML y CSS, manejo y creación de API 
                    Backend en Node.js y bases de datos en Express,
                    Mongo, MySql, y conceptos de REACT, y creación de varios proyectos."
                    imagen={Bootcamp}
                    fecha_inicio="Mar. 2024"
                    fecha_finalizacion="Oct. 2024"
                    />

                    <Info 
                    titulo="Tecnologo en Desarrollo de Software"
                    descripcion="Habilidades en desarrollo de software con React,
                    SpringBoot, Java, MySQL, y manejo de metodologias agiles, 
                    con experiencia en proyectos de desarrollo de software y 
                    colaboracion en equipo."
                    imagen={Grado}
                    fecha_inicio="Ago. 2022"
                    fecha_finalizacion="Dic. 2025"
                    />
                    
            </div>
        </>
    );
}