import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheet/HomeClients.css";



function HomeClients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchAllClients();
    }, [])

    const fetchAllClients = async () => {
        try {
            const response = await axios.get("http://localhost:8000/clients_section");
            setClients(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    return(

        
        <div className="Container">
            <h1>OUR CLIENTS</h1>
            <div className="Wrapper">
                <div className="Slider">
                    {clients.map((client, index) => (
                         <a key={index} href={client.url} target="blank"><img src={`http://localhost:8000/images/${client.image}`} alt={client.title} /></a>
                    ))} 
                    
                </div>
                <div className="Slider">
                    {clients.map((client, index) => (
                         <a key={index} href={client.url} target="blank"><img src={`http://localhost:8000/images/${client.image}`} alt={client.title} /></a>
                    ))} 
                  
                </div>
            </div>
        </div>
    )
}

export default HomeClients;
