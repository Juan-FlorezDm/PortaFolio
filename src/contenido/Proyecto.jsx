import React from "react";
import '../styles/Proyecto-card.css'

const Proyecto = ({descripcion, video , titulo}) => {
    return(
        <div className="proyecto-card">
            {titulo === 'deco' ? 
                (<img src={video} className="gif"></img>)
                : 
                (<>
                    <video  className="proyecto-video" src={video} autoPlay muted loop></video>
                    <div className="target">
                        <h2>{titulo}</h2>
                        <p className="descripcion">{descripcion}</p>
                    </div>
                </>
                )
            } 
        </div>
    );
}

export default Proyecto;