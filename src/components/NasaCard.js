import React from "react";
import {
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle
  } from 'reactstrap';

// const NasaCard = (props) => {
//     return (
//         <div className="nasa-card" >
//         <div className="header">
//             <h1>{props.title}</h1>
//             <h3>{props.date}</h3>
//         </div>
//             <img src={props.imgUrl}alt="Nasa" />
//              <p className="explanation">{props.explanation}</p>
//              <h3 className="copyright">Copyright: {props.copyright}</h3>
//         </div>
//     )
// }

// export default NasaCard;


const NasaCard = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle className="title">{props.title}</CardTitle>
            <CardSubtitle className="date">{props.date}</CardSubtitle>
          </CardBody>
          <img width="100%" src={props.imgUrl} alt="Card" />
          <CardBody>
            <CardText className="explanation">{props.explanation}</CardText>
            <CardText className="copyright">
                {props.copyright}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default NasaCard;