import React, { useEffect, useState, useRef } from 'react';
import '../styles/Principal.css'
import useSound from 'use-sound';
import primera from '../../public/canciones/musica.mp3'
import polaroid from '../../public/canciones/polaroid.mp3'
import ultima from '../../public/canciones/ultimavez.mp3'

export default function Principal(){

    const canciones = {
        1: primera,
        2: polaroid,
        3: ultima
    }

    const [indice, setIndice] = useState(1)
    const [play,{pause, duration, sound}] = useSound(canciones[indice],{interrupt:true})
    const [reproduciendo, setreproduccion] = useState(false)
    const [progreso, setProgreso] = useState(0)
    const intervalRef = useRef(null)
    const [parpadeando, setParpadeando] = useState(true)

    const handleScrub = (e) => {
        const nuevoTiempo = parseFloat(e.target.value)
        setProgreso(nuevoTiempo)
      
        if (sound && typeof sound.seek === 'function') {
          sound.seek(nuevoTiempo)
        }
      }
      

    useEffect(() => {
        pause()
        setreproduccion(false)
        setProgreso(0)
      }, [indice, pause])

      useEffect(() => {
        if (reproduciendo && sound) {
          intervalRef.current = setInterval(() => {
            const tiempoActual = sound.seek()
            setProgreso(tiempoActual)
          }, 500)
        } else {
          clearInterval(intervalRef.current)
        }
      
        return () => clearInterval(intervalRef.current)
      }, [reproduciendo, sound])
      


    const reproducir = ()=>{
        if(reproduciendo){
            pause()
            setParpadeando(true)
        }else{
            sound.play()
            setParpadeando(false)
        }
        setreproduccion(!reproduciendo)
    }

      const cambioCancion = () => {
        setIndice((e) => (e === 3 ? 1 : e + 1))
        setParpadeando(true)
      }

      const anterior =()=>{
        setIndice((e)=>(e===1 ? 3: e - 1))
        setParpadeando(true)
      }


    return(
        <>
            <div className="informacion">
                <div className='contenido'>  
                    <div className='fondo'></div> 
                    <div className='conten'>
                        <img 
                        src="/personal.jpeg"
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
                                    alt="" 
                                    className={!reproduciendo && parpadeando ? "blink" : ""}/>
                            </button>
                                
                            <button onClick={cambioCancion}>
                                <img 
                                    src="../siguiente.png" 
                                    width={25}
                                    height={25}
                                    alt="next" />
                            </button>
                        </div>         
                        <div className='time'>
                            <input
                                type="range"
                                min="0"
                                max={duration ? duration / 1000 : 0}
                                onChange={handleScrub}
                                value={progreso}
                                step="0.1"
                            />
                        </div>
                    </div>    
                </div>
            </div>

            </>
    );
}


 