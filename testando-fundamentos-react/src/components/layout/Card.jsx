import React from "react";
import './Card.css'

export default (props) => {

    return (
        <div className="card">
           <div className="titulo"> {props.titulo} </div>
           <div className="conteudo"> {props.children} </div>
        </div>
    )
}