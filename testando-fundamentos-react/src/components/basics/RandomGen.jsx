import React from "react";

export default (props) =>{
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min)) + min;
    return(
        <div className="RandomGen">
            <h3>Random Number Generator</h3>
            <p> Min. Value: </p><strong> {min} </strong>
            <p> Max. Value: </p><strong> {max} </strong>
            <p> Generated Value: </p><strong> {random} </strong>
        </div>
    )
}