import React, { useState } from "react";
import aphrodite from '../images/aphrodite.png';
import ares from  '../images/ares.png';
import artemis from  '../images/artemis.png';
import daphne from  '../images/daphne.png';
import echo from  '../images/echo.png';
import eris from  '../images/eris.png';
import eros from  '../images/eros.png';
import hades from  '../images/hades.png';
import hecates from  '../images/hecate.png';
import hephaestus from '../images/hephaestus.png';
import hera from   '../images/hera.png';
import hermes from  '../images/hermes.png';
import persephone from  '../images/persephone.png';
import poseidon from  '../images/poseidon.png';
import psyche from  '../images/psyche.png'; 
const LoadImages = () => {
    const [imageSourceArray, setArray] = useState([aphrodite, ares, artemis, daphne, echo, eris, eros, hades, hecates, hephaestus, hera, hermes, persephone, poseidon, psyche]);

    const getRandom = () => {
        let currentIndex = imageSourceArray.length, randomIndex;
        
        console.log('runs')
        while (currentIndex !== 0) {
            randomIndex= Math.floor(Math.random()*currentIndex);
            currentIndex--; 
            [imageSourceArray[currentIndex], imageSourceArray[randomIndex]] = [imageSourceArray[randomIndex], imageSourceArray[currentIndex]]             
        };
        return setArray(imageSourceArray);        
    };

    return (
        <div>
            {imageSourceArray.map((src) => {
                return (
                    <img src={src} alt='' onClick={getRandom}/>
                )
            })}
        </div>
    )
};


export default LoadImages;