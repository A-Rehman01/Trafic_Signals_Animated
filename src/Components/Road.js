import React  from 'react';
import Street from './../Images/Road1.jpg'
import Cloud from './../Images/cloud1.png'
import Cloud1 from './../Images/cloud2.png'
import Webanimation from '@wellyshen/use-web-animations';
import Car1 from './Car1';
import Bike from './Bike';
function Road (){

    const runClouds=Webanimation({
        keyframes:[
            {transform:'translateX(100%)'},
            {transform:'translateX(-100%)'},
        ],
        timing:{
            duration: 30000,
            iterations: Infinity
        }
    })

    return(
        <div>
            <div  className="sky">
                <div ref={runClouds.ref} className="runClouds">
                <img  src={Cloud} alt='Clouds' className="clouds" />
                <img  src={Cloud1} alt='Clouds' className="clouds" />
                <img  src={Cloud} alt='Clouds' className="clouds" />
                </div>
            </div>
            <div className="div_Street">
                <img src={Street} alt="Street_Road" className="Street" />
                <img src={Street} alt="Street_Road" className="Street1" />
                <Car1/>
                <Bike/>
            </div>

            
        </div>
    )
}
export default Road;