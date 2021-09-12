import React, { Component } from 'react'
import loadergif from "./loadergif.gif"
export class Loader extends Component {
    render() {
        return (
            <>  <div className="d-flex justify-content-center align-items-center">
                     <img src= {loadergif} alt="loder"  />
                </div>
                
            </>
        )
    }
}

export default Loader
