import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';

function Bike (){

    const runBike = Webanimation({
        keyframes: [
            { transform: 'translate(-10%,0)' },
            { transform: 'translate(20%,0)' },
            { transform: 'translate(25%,0)' },
            { transform: 'translate(25%,0)' },
            // { transform: 'translate(70%,0)' },
            { transform: 'translate(100%,0)' },
        ],
        timing: {
            duration: 5000,
            iterations: Infinity,
        }
    })
    return(
        <div ref={runBike.ref} className="bike">
            <img src='https://www.animatedimages.org/data/media/73/animated-motorbike-image-0077.gif' alt="Bike img"/>
        </div>
    )
}
export default Bike;