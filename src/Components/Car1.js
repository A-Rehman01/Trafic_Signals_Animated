import React from 'react';
import Carone from './../Images/Car1.gif'
import Webanimation from '@wellyshen/use-web-animations';



function Car1() {

    const runCar = Webanimation({
        keyframes: [
            { transform: 'translate(0,0)' },
            { transform: 'translate(30%,0)' },
            { transform: 'translate(60%,0)' },
            { transform: 'translate(70%,0)' },
            { transform: 'translate(70%,0)' },
            { transform: 'translate(100%,0)' },
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
        }
    })
    return (
        <div ref={runCar.ref} className="Car1">
            <img src={Carone} alt="Car_image" />
        </div>
    )
}
export default Car1;