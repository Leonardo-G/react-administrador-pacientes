import React from 'react';
import PropTypes from "prop-types"

export const Cita = ({cita, eliminarCita}) => {
    const {mascota, propietario, hora, fecha, sintomas, id} = cita
    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>

            <button onClick={() => eliminarCita(id)} className="button eliminar u-full-width">Eliminar &times;</button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}
