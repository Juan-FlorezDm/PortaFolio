import React from "react";

const Info = ({titulo, descripcion, imagen, fecha_inicio, fecha_finalizacion}) => {
    return(
        <div className="estudio-card">
            <div className="estudio-data">
                <h2>{titulo}</h2>
                    <div className="footer-estudio">
                        <p>{descripcion}</p>
                        <p>{fecha_inicio} - {fecha_finalizacion}</p>
                    </div>
                </div>
            <img src={imagen} className="estudio-imagen"></img>
        </div>
    )
}

export default Info;