import React, { useState } from 'react';
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

export const Formulario = ({crearCita}) => {
    //Crear State de Citas
    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
    })

    const [error, setError] = useState(false)
    
    //Funcion que se ejecutar cada vez que el usuario escribe en un input
    const actualizarState = (e) => {
        setCita({
            ...cita, 
            [e.target.name] : e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;
    
    //Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault()
        
        //Validar
        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
            setError(true);
            setTimeout(() => {
               setError(false) 
            }, 2000);
            return;
        }

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita)

        //Reiniciar el FORM
        setCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: "",
        })
    }

    return (
        <>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}
            <form onSubmit={submitCita}>
                <label>Nombre mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de tu mascota"  
                    onChange={actualizarState}
                    value={mascota}
                    />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la macota"  
                    onChange={actualizarState}
                    value={propietario}      
                    />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"  
                    onChange={actualizarState}
                    value={fecha}  
                    />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"  
                    onChange={actualizarState}
                    value={hora}  
                    />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"  
                    onChange={actualizarState}
                    value={sintomas}  
                ></textarea>
                <button 
                    type="submit"
                    className="u-full-width button-primary"    
                >Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
