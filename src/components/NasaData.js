import React, {useState, useEffect} from "react";
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
            
        </div>
    )
};

export default NasaData;