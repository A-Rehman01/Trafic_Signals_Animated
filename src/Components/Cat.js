import React from 'react'
import Cats from './../Images/Cat.gif'
import Webanimation from '@wellyshen/use-web-animations';



function Cat() {
    const runCat = Webanimation({
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
        <div  ref={runCat.ref}   className="Cat" >
            <img   src={Cats} alt="Cat_image"  />
        </div>
    )
}
export default Cat;