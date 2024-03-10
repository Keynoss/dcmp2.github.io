import { useState, useEffect } from "react";
import axios from "axios";
import './stylesheet/NavBar.css';
import { HashLink } from "react-router-hash-link";
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default  function NavBar () {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/icon");
            setIcons(response.data);

        } catch (e) {
            console.log(e);
        }
    }

    const filterLogo = icons.filter((logo) => logo.category === "Brand");


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                {filterLogo.map((data, index) => (
                    <a key={index} className="navbar-brand" href={data.url}><img src={`http://localhost:8000/images/${data.image}`} alt={data.alt} /></a>
                ))}
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="/#about">ABOUT</a>
                        </li>
                       
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SERVICES
                        </a>
                            <ul className="dropdown-menu">
                                <li><HashLink className="dropdown-item" to="/services#WC">Whole Construction</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/services#Ren">Renovation</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/services#Elec">Electrical</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/services#Carp">Carpentry</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/services#Plum">Plumbing</HashLink></li>
                                <li><HashLink className="dropdown-item" to="/services#PaF">Painting and Flooring</HashLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="/#projects">PROJECTS</a>
                        </li>
                
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className='nav-item'><a href="/#contact"  className='btn'><MailRoundedIcon></MailRoundedIcon> CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}