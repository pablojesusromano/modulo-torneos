import { React, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

//Components
import Card from '../components/Card';
import MainTitle from '../components/MainTitle';
import Hero from '../components/Hero';
import ButtonBack from "../components/ButtonBack"

//Images
import ImageVasXMas from '../assets/sedes/vasxmas.jpg';
import ImageCanchita from '../assets/sedes/lacanchita.jpg';
import ImageFairPlay from '../assets/sedes/fairplay.jpg';

import imgBg from '../assets/principales/world-cup-original.jpg';

const Canchas = () => {
    const { jsonData, updateJsonData } = useContext(DataContext);
    const handleClick = (elem) => {
        const newData = { deporte: jsonData.deporte, sede: jsonData.sede, cancha: elem };
        updateJsonData(newData);
    };

    // NAVIGATE PARA BOTON VOLVER ATRAS
    const history = useNavigate()

    const canchas = [
        { id: 1, nombre: 'futbolcinco', nombre_publico: "Futbol 5", activo: 1 },
        { id: 2, nombre: 'futbolsiete', nombre_publico: "Futbol 7", activo: 1 },
        { id: 3, nombre: 'futbolonce', nombre_publico: "Futbol 11", activo: 1 },
    ];
    /* 
        const fetchDeportes = async () => {
            const response = await fetch('http://localhost:3001/api/deportes/')
            const json = await response.json()
            if (response.ok) {
                setDeportes(json.deportes)
            }
        } 
    */

    /*     useEffect(() => {
            fetchDeportes();
        }, []) 
    */

    useEffect(() => {
        console.log(jsonData)
    }, [])


    return (
        <div>
            <Hero imageSrc={imgBg} title="Crea torneos de cualquier deporte." />
            <ButtonBack onClick={() => history(-1)} />
            <MainTitle title="Elige el tipo de cancha" />

            {canchas && Array.isArray(canchas) && canchas.map((cancha) => (
                <Card key={cancha.id} title={cancha.nombre_publico} imageSrc={cancha.nombre === "vasxmas" ? ImageVasXMas : cancha.nombre === "lacanchita" ? ImageCanchita : ImageFairPlay} />
            ))}

        </div>
    )
}

export default Canchas