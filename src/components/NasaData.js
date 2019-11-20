import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

function NasaData() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                console.log(response.data);
                setNasaData(response.data)
            })
            .catch(error => {
                console.log("The data was not found", error);
            })
    }, []);

    return(
        <div className="nasa-container">
            <div>
                <NasaCard 
                    copyright={nasaData.copyright}
                    date={nasaData.date}
                    explanation={nasaData.explanation}
                    title={nasaData.title}
                    imgUrl={nasaData.url}
                    />
            </div>
        </div>
    );
}

export default NasaData;