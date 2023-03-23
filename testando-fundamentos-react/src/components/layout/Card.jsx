import React from "react";
import './Card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="card" style={cardStyle}>
           <div className="titulo"> {props.titulo} </div>
           <div className="conteudo"> {props.children} </div>
        </div>
    )
}