import React from 'react';
import './StarsControl.css';

const StarsControl = (props) =>{
    return(
        <div className="avalicoes">
            <i className={`fas fa-star ${props.indice>=1?'filled':'empty'}`}></i>
            <i className={`fas fa-star ${props.indice>=2?'filled':'empty'}`}></i>
            <i className={`fas fa-star ${props.indice>=3?'filled':'empty'}`}></i>
            <i className={`fas fa-star ${props.indice>=4?'filled':'empty'}`}></i>
            <i className={`fas fa-star ${props.indice>=5?'filled':'empty'}`}></i>
        </div>
    )
}


export default StarsControl
