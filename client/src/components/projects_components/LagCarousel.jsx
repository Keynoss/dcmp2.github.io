import { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';

const Container = styled.div`
    width: 600px;
    height: 650px;
    transition: 0.4s all ease-in-out;

    @media (max-width: 990px) {
        width: 450px;
        height: 500px;
        margin-bottom: 20px;
    }

    @media (max-width: 600px) {
        width: 300px;
        height: 350px;
    }
`

const ConsImg = styled.img`
    width: 600px;
    height: 650px;
    border-radius: 0.5em;

    @media (max-width: 990px) {
        width: 450px;
        height: 500px;
    
    }

    @media (max-width: 600px) {
        width: 300px;
        height: 350px;
    }
`

const ProjectTitle = styled.h2`
    border: 1px solid maroon;
    background-color: maroon;
    padding: 10px 0;
    border-radius: 0.5em;

    @media (max-width: 990px) {
        font-size: 15px;
        padding: 5px 0;
    }

    @media (max-width: 600px) {
        font-size: 10px;
    }
    
`

function LagCarousel () {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchAllProjects();
    }, [])

    const fetchAllProjects = async () => {
        try {
            const response = await axios.get("http://localhost:8000/projects");
            setProjects(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    const filterLag = projects.filter((lag) => lag.title === "Laguna");


    return (

        <Container>
            <Carousel fade >
                {filterLag.map((lag) => (
                <Carousel.Item>
                    <ConsImg src={`http://localhost:8000/images/${lag.image}`} alt="Muntinlupa Img" />
                    <Carousel.Caption>
                        <ProjectTitle>{lag.title}</ProjectTitle>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
       

        
    )
}

export default LagCarousel