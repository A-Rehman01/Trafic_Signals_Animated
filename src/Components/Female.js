import React from 'react'
import Webanimation from '@wellyshen/use-web-animations';


function Female() {
    const runFemale = Webanimation({
        keyframes: [
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(100%)' },
        ],
        timing: {
            duration: 70000,
            iterations: Infinity
        }
    })
    return (
        <div ref={runFemale.ref} className='Female'>
            <img src='https://www.animatedimages.org/data/media/1635/animated-walking-image-0055.gif' alt="Female"  />
        </div>
    )
}
export default Female;