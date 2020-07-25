import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';
import  Cartwo from './../Images/Car2.gif'


function Car2() {

    const runCar = Webanimation({
        keyframes: [
            { transform: 'translate(100%,0)' },
            { transform: 'translate(-100%,0)' },
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
        }
    })
    return (
        <div ref={runCar.ref} className="Car2">
            <img src={Cartwo} alt="Car_image" />
        </div>
    )
}
export default Car2;