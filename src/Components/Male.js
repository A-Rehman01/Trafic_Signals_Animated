import React from 'react';
import Webanimation from '@wellyshen/use-web-animations';



function Male() {
    const runMale = Webanimation({
        keyframes: [
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(100%)' },
        ],
        timing: {
            duration: 10000,
            iterations: Infinity
        }
    })
    return (
        <div ref={runMale.ref} className="Cat_men">
            <img src='https://www.animatedimages.org/data/media/1635/animated-walking-image-0004.gif' alt="Cat_men"  />
        </div>
    )
}
export default Male;