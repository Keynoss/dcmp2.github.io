import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Container = styled.div`
    max-width: 500px;
    max-height: 400px;

    @media (max-width: 960px) {
        width: 400px;
        height: 300px;
    }

    @media (max-width: 600px) {
        width: 350px;
        height: 250px;
    }
`

const ConsImg = styled.img`
    width: 500px;
    height: 400px;

    @media (max-width: 960px) {
        width: 400px;
        height: 300px;
    
    }

    @media (max-width: 600px) {
        width: 350px;
        height: 250px;
    }


`

function ConsCarousel() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchAllServices();
    }, [])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get("http://localhost:8000/services");
            setServices(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    const filterCons = services.filter((cons) => cons.title === "Whole Construction");


  return (
    <Container>
            <Carousel fade >
                {filterCons.map((cons, index) => (
                <Carousel.Item key={index}>
                    <ConsImg src={`http://localhost:8000/images/${cons.image}`} alt="Carpentry Img" />
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    
  );
}

export default ConsCarousel;