import React from "react";

const NasaCard = (props) => {
    return (
        <div className="nasa-card" key={props.id}>
        <div className="header">
            <h1>Title: {props.title}</h1>
            <h3>Date: {props.date}</h3>
        </div>
            <img src={props.imgUrl}alt="Nasa" />
             <p className="explanation">Explanation: {props.explanation}</p>
             <h3 className="copyright">Copyright: {props.copyright}</h3>
        </div>
    )
}

export default NasaCard;