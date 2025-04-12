import React, { useEffect, useState } from 'react';
import '../styles/Principal.css'
import useSound from 'use-sound';
import primera from '../../public/canciones/musica.mp3'
import polaroid from '../../public/canciones/polaroid.mp3'
import ultima from '../../public/canciones/ultimavez.mp3'
import logo from '../assets/react.svg'

export default function Principal(){

    const canciones = {
        1: primera,
        2: polaroid,
        3: ultima
    }

    const [indice, setIndice] = useState(1)
    const [play,{pause}] = useSound(canciones[indice])
    const [reproduciendo, setreproduccion] = useState(false)

    useEffect(() => {
        pause()
        setreproduccion(false)
      }, [indice, pause])

    const reproducir = ()=>{
        if(reproduciendo){
            pause()
        }else{
            play()
        }
        setreproduccion(!reproduciendo)
    }

      const cambioCancion = () => {
        setIndice((e) => (e === 3 ? 1 : e + 1))
      }

      const anterior =()=>{
        setIndice((e)=>(e===1 ? 3: e - 1))
      }

    return(
        <>
            <div className="informacion">
                <div className='contenido'>
                    <img src={logo} alt="imagen react" />
                    <img 
                    src="personal.jpeg"
                    alt="foto de perfil" 
                    style={{borderRadius: "100%", width: '80%'}}
                    />

                    <nav>
                        <ul>
                            <li><a href="https://github.com/Juan-FlorezDm" target='_blank'>Github</a></li>
                            <li><a href="https://www.linkedin.com/in/juan-diego-florez-mendez-632522234/" target='_blank'>Linkedln</a></li>
                            <li><a href="https://open.spotify.com/user/31ijr27ek5q36thgywgia2cnmqy4?si=b1299b6eee6b4d4a" target='_blank'>Spotify</a></li>
                        </ul>
                    </nav>
                    <p>
                    Hola, soy estudiante de ingeniería de sistemas
                    Me apasiona aprender cosas nuevas, de cualquier tema,
                    me apasiona conocer personas ampliar mi circulo social.< br />
                    <br />
                    Soy entusiasta, y me esfuerzo por aprender tecnologías como
                    Java, Javascrpit, HTML, CSS, React, Linux, herramientas
                    de búsqueda de vulnerabilidades, la computación
                    en la nube como AWS, Oracle cloud
                    </p>

                    
                    <div className='cancion'>
                        <button onClick={anterior} >
                            <img 
                                src="../anterior.png" 
                                width={25}
                                height={25}
                                alt="former" />
                        </button>
                        <button onClick={reproducir}>
                            <img 
                                src={reproduciendo ? "../pause.png": "../play.png"} 
                                height={35}
                                width={35}
                                alt="" />
                        </button>
                               
                        <button onClick={cambioCancion}>
                            <img 
                                 src="../siguiente.png" 
                                width={25}
                                height={25}
                                alt="next" />
                        </button>
                    </div>             
                </div>
            </div>

            </>
    );
}


 