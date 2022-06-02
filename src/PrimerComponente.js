import React from 'react';
import { Navbar } from './Navbar';

export function PrimerComponente() {

    let nombre = "Daniela"

    let persona = {
        nombre: "Daniela",
        apellido: "Estrada",
        edad: 26
    }

    return (
        <>
<Navbar/>
            <h1 className='text-center'> Bienvenido </h1>
            <p> Esta es mi primera app con react, soy {nombre} </p>
            <ul>
                <li> {persona.nombre} </li>
                <li> {persona.apellido} </li>
                <li> {persona.edad} </li>
            </ul>

        </>
    )


}