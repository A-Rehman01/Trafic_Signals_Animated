import React from 'react'
import Footpath_bridge from './../Images/footpath.jpg'
import Cat from './Cat'


function Footpath() {

    return (

        <div  >
                <img src={Footpath_bridge} className="Footpath" alt="FootpathIMG" />
                <Cat/>
        </div>
    )
}
export default Footpath;